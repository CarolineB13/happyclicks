// src/components/Services.js
import React from 'react';
import './Services.css';
import TechnologiesChart from '../TechnologiesChart/TechnologiesChart';
import arrowIcon from '../../assets/arrow-icon.svg';

function Services() {
  return (
    <section className="services-section">
      <h2>Mes Compétences</h2>
      <ul className="custom-list">
        <li><img src={arrowIcon} alt="Flèche" className="arrow-icon" />Création de sites vitrines</li>
        <li><img src={arrowIcon}  alt="Flèche" className="arrow-icon" />Responsive Design</li>
        <li><img src={arrowIcon}  alt="Flèche" className="arrow-icon" />Développement front-end (HTML, CSS, JavaScript, React)</li>
      </ul>

      {/* Section des Compétences Techniques avec Barres de Progression */}
      <TechnologiesChart />
    </section>
  );
}

export default Services;
