import React from 'react';
import './Services.css';
import TechnologiesChart from '../TechnologiesChart/TechnologiesChart';
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';

function Services() {
  return (
    <section className="services-section">
      <h2>Mes Compétences</h2>
      <div className="services-container">
        {/* Carte 1 */}
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Développement Web</h3>
          <p>
            Création de sites vitrines modernes et performants avec une attention particulière à l'expérience utilisateur.
          </p>
        </div>

        {/* Carte 2 */}
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h3>Responsive Design</h3>
          <p>
            Optimisation pour tous les écrans, du téléphone portable à l'écran d'ordinateur, avec un design adaptatif.
          </p>
        </div>

        {/* Carte 3 */}
        <div className="service-card">
          <FaPalette className="service-icon" />
          <h3>Front-End Design</h3>
          <p>
            Expertise en HTML, CSS, JavaScript, et React pour des interfaces intuitives et modernes.
          </p>
        </div>
      </div>

      {/* Section des Compétences Techniques */}
      <TechnologiesChart />
    </section>
  );
}

export default Services;
