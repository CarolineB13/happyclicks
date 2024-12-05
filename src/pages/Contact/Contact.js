import React from 'react';
import SEO from '../../components/SEO/SEO';
import contactBanner from '../../assets/contact-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../components/ContactForm/ContactForm';
import PhoneLink from '../../components/PhoneLink/PhoneLink';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      {/* SEO */}
      <SEO
  title="Contactez HappyClicks - Développeuse Web à Aubagne"
  description="Contactez Caroline, développeuse web spécialisée en front-end à Aubagne, pour discuter de vos projets web et obtenir un site performant et optimisé."
  url="https://happyclicks.fr/contact"
  image={contactBanner}
  structuredData={[
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
        "addressCountry": "FR",
      },
      "openingHours": "Mo-Fr 08:30-17:30",
      "description": "Développeuse web spécialisée dans la création de sites modernes et optimisés SEO.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33650354556",
        "contactType": "customer service",
      },
    },
  ]}
/>

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
