// PortfolioCarousel.js
import React from 'react';
import './PortfolioCarousel.css';

function PortfolioCarousel() {
  return (
    <section className="portfolio-section">
      <h2>Mes Derniers Projets</h2>
      <div className="portfolio-carousel">
        {/* Affichage des projets */}
        <div className="project-card">
          <img src="projet1.jpg" alt="Projet 1" />
          <p>Projet 1</p>
        </div>
        <div className="project-card">
          <img src="projet2.jpg" alt="Projet 2" />
          <p>Projet 2</p>
        </div>
        {/* Ajoutez d'autres projets */}
      </div>
    </section>
  );
}

export default PortfolioCarousel;
