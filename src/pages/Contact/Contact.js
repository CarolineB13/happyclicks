import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contactez-moi</h2>
      <p>
        <FontAwesomeIcon icon={faPhone} /> 06.50.35.45.56
      </p>
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
