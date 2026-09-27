# Happyclicks — formulaire Cloudflare + Turnstile + Resend

Le code est prêt pour :

- héberger le site Astro statique sur Cloudflare Workers ;
- traiter `POST /api/contact` dans un Worker ;
- vérifier le jeton Cloudflare Turnstile côté serveur ;
- envoyer la demande à `contact@happyclicks.fr` via Resend ;
- utiliser l'adresse du prospect comme `Reply-To`.

## Clés publiques déjà intégrées

La **Site Key Turnstile** est publique et intégrée dans `src/pages/contact.astro`.
En développement local (`npm run dev`), le site utilise automatiquement la clé de test officielle Cloudflare afin que le widget fonctionne sur `localhost`.

## Secrets à NE PAS mettre dans Git

Deux secrets doivent être ajoutés dans Cloudflare après création du Worker :

- `RESEND_API_KEY` : clé API Resend ;
- `TURNSTILE_SECRET_KEY` : clé secrète du widget Turnstile.

Dans Cloudflare : **Workers & Pages → happyclicks → Settings → Variables and Secrets → Add** puis choisir **Secret** pour chacun.

On peut aussi les ajouter en ligne de commande une fois le Worker créé :

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
```

Ne jamais ajouter les valeurs dans `wrangler.jsonc`, `.env` commité ou un fichier du dépôt.

## Resend

Le domaine d'envoi prévu est : `mail.happyclicks.fr`.

Expéditeur du formulaire :

`Happyclicks <formulaire@mail.happyclicks.fr>`

Destination :

`contact@happyclicks.fr`

Avant le test réel, `mail.happyclicks.fr` doit être **Verified** dans Resend.

## Déploiement Cloudflare

Configuration incluse dans `wrangler.jsonc` :

- Worker : `happyclicks`
- build Astro : `npm run build`
- assets : `./dist`
- Worker exécuté en priorité uniquement pour `/api/*`

Pour tester le build local :

```bash
npm install
npm run build
```

Pour un déploiement manuel :

```bash
npx wrangler deploy
```

Si le projet est connecté à GitHub dans Cloudflare, utiliser :

- Build command : `npm run build`
- Deploy command : `npx wrangler deploy`

## Test final

Après bascule DNS et ajout des secrets :

1. ouvrir `https://happyclicks.fr/contact/` ;
2. remplir le formulaire ;
3. vérifier que Turnstile valide la demande ;
4. vérifier l'arrivée du message dans `contact@happyclicks.fr` ;
5. cliquer sur **Répondre** et vérifier que la réponse est adressée au prospect ;
6. vérifier la redirection vers `/merci/`.
