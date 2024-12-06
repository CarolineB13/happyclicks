import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../components/ContactForm/ContactForm';
import PhoneLink from '../../components/PhoneLink/PhoneLink';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      {/* SEO */}
      <Helmet>
  <title>Contactez HappyClicks - Développeuse Web à Aubagne</title>
  <meta name="description" content="Contactez Caroline, développeuse web spécialisée en front-end à Aubagne, pour discuter de vos projets web et obtenir un site performant et optimisé." />
  <meta name="keywords" content="contact, développeuse web, Aubagne, HappyClicks, création site internet, SEO, freelance" />
  <link rel="canonical" href="https://happyclicks.fr/contact" />
  <meta property="og:title" content="Contactez HappyClicks - Développeuse Web à Aubagne" />
  <meta property="og:description" content="Contactez Caroline, développeuse web spécialisée en front-end à Aubagne, pour discuter de vos projets web et obtenir un site performant et optimisé." />
  <meta property="og:url" content="https://happyclicks.fr/contact" />
  <meta property="og:image" content="https://happyclicks.fr/contact-banner.png" />
  <script type="application/ld+json">
    {JSON.stringify({
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
      "openingHours": ["Mo-Fr 08:30-17:30"],
      "description": "Développeuse web spécialisée dans la création de sites modernes et optimisés SEO.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33650354556",
        "contactType": "customer service"
      }
    })}
  </script>
</Helmet>

      <h1>Contactez-moi</h1>
      <div className="contact">
        <p>
          <FontAwesomeIcon icon={faPhone} />{' '}
        </p>
        <div>
          <PhoneLink number="06.50.35.45.56" />
        </div>
      </div>
      <p className="contact-invite">
        Besoin d'un site web ou juste envie de papoter ? Remplissez le formulaire,
        et je vous répondrai plus vite qu'un clic de souris !{' '}
        <FontAwesomeIcon icon={faComputerMouse} />
      </p>
      <ContactForm />
    </section>
  );
}

export default Contact;
