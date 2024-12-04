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
        title="Contact - HappyClicks"
        description="Besoin d'un site web ou juste envie de discuter ? Contactez Caroline, développeuse web à Aubagne, via ce formulaire ou par téléphone."
        keywords="contact, développeuse web, site internet, freelance, Aubagne, HappyClicks"
        url="https://happyclicks.fr/contact"
        image= {contactBanner}
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
