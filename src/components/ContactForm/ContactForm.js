import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheckCircle, faBug } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';

function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setStatusMessage(
            <span>
              <FontAwesomeIcon icon={faPaperPlane} /> Un peu de patience, votre message s'envole... ✈️
            </span>
          
    ); 
    setStatusType("pending");
    setIsSending(true);

    emailjs
      .sendForm(
        'service_a95x7nf',        // Service ID
        'template_riyza4k',       // Template ID
        form.current,
        '2eO9fkTu2btlJrHd8'       // Public Key (User ID)
      )
      .then((result) => {
        console.log(result.text);
        setStatusMessage(
            <span>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Merci ! Votre message a bien été envoyé ! 🎉
          </span>
        );
        setStatusType("success");
      })
      .catch((error) => {
        console.error(error.text);
        setStatusMessage(
            <span>
            <FontAwesomeIcon icon={faBug} style={{ color: 'red' }} /> Aïe ! Une erreur s’est glissée... 🐞 Merci d’essayer à nouveau.
          </span>
        );
        setStatusType("error");
      })
      .finally(() => {
        setIsSending(false); // Réactiver le bouton
      });

    e.target.reset();
  };

  return (
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
      <button type="submit" disabled={isSending}>
        {isSending ? "Envoi en cours..." : "Envoyer"}
      </button>
      {statusMessage && (
        <p className={`status-message ${statusType}`}>{statusMessage}</p>
      )}
    </form>
  );
}

export default ContactForm;
