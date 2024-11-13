// src/components/Services.js
import React from 'react';
import './Services.css';
import TechnologiesChart from '../TechnologiesChart/TechnologiesChart';

function Services() {
  return (
    <section className="services-section">
      <h2>Mes Compétences</h2>
      <ul className="custom-list">
        <li>Création de sites vitrines</li>
        <li>Responsive Design</li>
        <li>Développement front-end (HTML, CSS, JavaScript, React)</li>
      </ul>

      {/* Section des Compétences Techniques avec Barres de Progression */}
      <TechnologiesChart />
    </section>
  );
}

export default Services;
