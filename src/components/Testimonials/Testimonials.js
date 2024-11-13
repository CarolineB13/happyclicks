// Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Avis Clients</h2>
      <div className="testimonials-carousel">
        {/* Chaque témoignage sous forme de carte */}
        <div className="testimonial">
          <p>"Service incroyable, très professionnel !"</p>
          <p>- Client 1</p>
        </div>
        <div className="testimonial">
          <p>"Mon site est magnifique, merci !"</p>
          <p>- Client 2</p>
        </div>
        {/* Ajoutez d'autres témoignages */}
      </div>
    </section>
  );
}

export default Testimonials;
