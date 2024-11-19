import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import maPhoto from '../../assets/Caroline5.jpg';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';


function Home() {
  return (
    <div className="home">
      {/* Section de Bienvenue */}
      <section className="welcome-section">
        <h1>Bienvenue chez HappyClicks</h1>
        <p>Votre partenaire en solutions digitales</p>
        <Link to="/portfolio" className="cta-button">
          Voir mes projets
        </Link>
      </section>

{/* Section Présentation */}
<section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>À propos de moi</h2>
            <p>Je suis développeuse spécialisée dans la création de sites vitrines modernes et performants. Ensemble, créons une présence en ligne à votre image.</p>
          </div>
          <div className="about-photo">
            <img src={maPhoto} alt="Caroline" />
          </div>
        </div>
      </section>

      {/* Section Services / Compétences */}
      <Services />

      {/* Section Témoignages */}
      <Testimonials />
    </div>
  );
}

export default Home;
