import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({
  title = "HappyClicks - Développeuse Web à Aubagne",
  description = "Bienvenue chez HappyClicks ! Caroline, développeuse web spécialisée en front-end à Aubagne, crée des sites modernes, performants et optimisés SEO.",
  keywords = "développeuse web, Aubagne, création site internet, front-end, SEO, sites responsives, freelance, HappyClicks",
  url = "https://happyclicks.fr/",
  image = "https://happyclicks.fr/happyclicks-social.png",
  type = "website",
  author = "Caroline Briois",
  structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "HappyClicks",
      "url": "https://happyclicks.fr",
      "telephone": "+33650354556",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "365 chemin de Saint Joseph",
        "addressLocality": "Aubagne",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "postalCode": "13400",
        "addressCountry": "FR"
      },
      "openingHours": "Mo-Fr 08:30-17:30",
      "description": "Développeuse web spécialisée dans la création de sites modernes et optimisés SEO.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33650354556",
        "contactType": "customer service"
      }
    },
    {
      "@type": "Organization",
      "name": "HappyClicks",
      "url": "https://happyclicks.fr",
      "logo": "https://happyclicks.fr/favicon.svg"
    }
  ]
}) {
  return (
    <Helmet>
  {/* Balises générales */}
  <title>{title ? `${title} - HappyClicks` : "HappyClicks"}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <link rel="canonical" href={url} />
  <meta name="author" content={author} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="mobile-web-app-capable" content="yes" />

  {/* Balises Open Graph */}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={type} />
  <meta property="og:image" content={image} />
  <meta property="og:locale" content="fr_FR" />

  {/* Balises Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
</Helmet>

  );
}

export default SEO;
