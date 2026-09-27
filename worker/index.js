const ALLOWED_HOSTNAMES = new Set(["happyclicks.fr", "www.happyclicks.fr"]);
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const TURNSTILE_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== "/api/contact") {
      return new Response("Not found", { status: 404 });
    }

    if (request.method !== "POST") {
      return json({ ok: false, message: "Méthode non autorisée." }, 405, {
        Allow: "POST",
      });
    }

    if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY) {
      console.error("Missing RESEND_API_KEY or TURNSTILE_SECRET_KEY");
      return json(
        {
          ok: false,
          message:
            "Le formulaire est momentanément indisponible. Vous pouvez écrire directement à contact@happyclicks.fr.",
        },
        503
      );
    }

    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 50_000) {
      return json({ ok: false, message: "Le message est trop volumineux." }, 413);
    }

    let form;
    try {
      form = await request.formData();
    } catch {
      return json({ ok: false, message: "Formulaire invalide." }, 400);
    }

    // Honeypot silencieux : un robot qui remplit ce champ reçoit une réponse
    // positive, mais aucun e-mail n'est envoyé.
    if (text(form, "bot-field", 200)) {
      return json({ ok: true });
    }

    const data = {
      nom: text(form, "nom", 120),
      email: text(form, "email", 254).toLowerCase(),
      telephone: text(form, "telephone", 50),
      siteActuel: text(form, "site-actuel", 300),
      besoin: text(form, "besoin", 150),
      budget: text(form, "budget", 100),
      delai: text(form, "delai", 100),
      message: text(form, "message", 5000),
    };

    if (!data.nom || !data.email || !data.besoin || !data.message) {
      return json(
        { ok: false, message: "Merci de remplir tous les champs obligatoires." },
        400
      );
    }

    if (!isValidEmail(data.email)) {
      return json({ ok: false, message: "L’adresse e-mail semble incorrecte." }, 400);
    }

    const turnstileToken = text(form, "cf-turnstile-response", 2500);
    if (!turnstileToken) {
      return json(
        { ok: false, message: "Merci de valider la vérification anti-spam." },
        400
      );
    }

    const verification = await verifyTurnstile({
      token: turnstileToken,
      secret: env.TURNSTILE_SECRET_KEY,
      remoteIp: request.headers.get("CF-Connecting-IP") || "",
    });

    if (!verification.success) {
      console.warn("Turnstile validation failed", verification["error-codes"] || []);
      return json(
        {
          ok: false,
          message:
            "La vérification anti-spam a expiré ou a échoué. Merci de réessayer.",
        },
        400
      );
    }

    if (verification.action && verification.action !== "contact") {
      console.warn("Unexpected Turnstile action", verification.action);
      return json({ ok: false, message: "Vérification invalide." }, 400);
    }

    if (verification.hostname && !ALLOWED_HOSTNAMES.has(verification.hostname)) {
      console.warn("Unexpected Turnstile hostname", verification.hostname);
      return json({ ok: false, message: "Vérification invalide." }, 400);
    }

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Happyclicks <formulaire@mail.happyclicks.fr>",
        to: ["contact@happyclicks.fr"],
        reply_to: [data.email],
        subject: `Nouveau projet Happyclicks — ${safeSubject(data.nom)}`,
        text: buildTextEmail(data),
        html: buildHtmlEmail(data),
        tags: [
          { name: "source", value: "contact_form" },
          { name: "type", value: "project_request" },
        ],
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      console.error("Resend error", resendResponse.status, resendError);
      return json(
        {
          ok: false,
          message:
            "Votre message n’a pas pu être envoyé. Merci de réessayer ou d’écrire à contact@happyclicks.fr.",
        },
        502
      );
    }

    return json({ ok: true });
  },
};

async function verifyTurnstile({ token, secret, remoteIp }) {
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (remoteIp) body.append("remoteip", remoteIp);

  try {
    const response = await fetch(TURNSTILE_ENDPOINT, {
      method: "POST",
      body,
    });

    if (!response.ok) return { success: false, "error-codes": ["siteverify-error"] };
    return await response.json();
  } catch (error) {
    console.error("Turnstile Siteverify request failed", error);
    return { success: false, "error-codes": ["siteverify-unreachable"] };
  }
}

function text(form, key, maxLength) {
  const value = form.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function safeSubject(value) {
  return value.replace(/[\r\n]+/g, " ").slice(0, 100);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function display(value) {
  return value || "Non renseigné";
}

function buildTextEmail(data) {
  return [
    "Nouvelle demande depuis happyclicks.fr",
    "",
    `Nom : ${data.nom}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${display(data.telephone)}`,
    `Site actuel : ${display(data.siteActuel)}`,
    `Besoin : ${data.besoin}`,
    `Budget : ${display(data.budget)}`,
    `Délai : ${display(data.delai)}`,
    "",
    "Message :",
    data.message,
    "",
    "Vous pouvez répondre directement à cet e-mail : le Reply-To est l’adresse du prospect.",
  ].join("\n");
}

function buildHtmlEmail(data) {
  const row = (label, value) => `
    <tr>
      <td style="padding:8px 12px 8px 0;color:#607077;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;color:#0b2530;font-weight:600;">${escapeHtml(display(value))}</td>
    </tr>`;

  return `<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#f7f4ed;font-family:Arial,sans-serif;color:#0b2530;">
    <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
      <div style="background:#ffffff;border-radius:20px;padding:28px;border:1px solid #e8e6df;">
        <p style="margin:0 0 8px;color:#0f9f8f;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">Happyclicks</p>
        <h1 style="margin:0 0 24px;font-size:26px;line-height:1.2;">Nouvelle demande de projet</h1>
        <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;">
          ${row("Nom", data.nom)}
          ${row("E-mail", data.email)}
          ${row("Téléphone", data.telephone)}
          ${row("Site actuel", data.siteActuel)}
          ${row("Besoin", data.besoin)}
          ${row("Budget", data.budget)}
          ${row("Délai", data.delai)}
        </table>
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid #eceae4;">
          <p style="margin:0 0 10px;color:#607077;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;">Message</p>
          <p style="margin:0;white-space:pre-wrap;line-height:1.7;">${escapeHtml(data.message)}</p>
        </div>
        <p style="margin:26px 0 0;color:#607077;font-size:12px;line-height:1.6;">En cliquant sur « Répondre », la réponse sera adressée directement à ${escapeHtml(data.email)}.</p>
      </div>
    </div>
  </body>
</html>`;
}

function json(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...extraHeaders,
    },
  });
}
