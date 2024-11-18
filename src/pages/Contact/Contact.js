import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a95x7nf',        // Service ID
      'template_riyza4k',       // Template ID
      form.current,
      '2eO9fkTu2btlJrHd8'       // Public Key (User ID)
    )
    .then((result) => {
        console.log(result.text);
        setStatusMessage('Message envoyé avec succès !');
        console.log("Nom:", e.target.name.value);
        console.log("Email:", e.target.email.value);
        console.log("Message:", e.target.message.value);

    })
    .catch((error) => {
      console.error(error.text);
      setStatusMessage("Erreur lors de l'envoi du message.");
  });

    e.target.reset();
  };

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

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <label>Nom</label>
          <input type="text" name="name" required />
        </div>
        <div className="input-group">
          <label>Prénom</label>
          <input type="text" name="firstname" required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="input-group">
          <label>Téléphone</label>
          <input type="tel" name="phone" />
        </div>
        <div className="full-width">
          <label>Message</label>
          <textarea name="message" required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </section>
  );
}

export default Contact;
