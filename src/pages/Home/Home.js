import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import maPhoto from '../../assets/Caroline5.jpg';
import Services from '../../components/Services/Services';
import GoogleReviewsWidget from '../../components/GoogleReviewsWidget/GoogleReviewsWidget';


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
        <div className="footer-social">
          <div
            className="badge-base LI-profile-badge"
            data-locale="fr_FR"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="caroline-briois-213797100"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://fr.linkedin.com/in/caroline-briois-213797100?trk=profile-badge"
            >
            </a>
          </div>
        </div>
      </section>

      {/* Section Services / Compétences */}
      <Services />

      {/* Section Témoignages */}
      <section className="testimonials-section">
        <h2>Ce que disent nos clients</h2>
        <GoogleReviewsWidget />
      </section>

    </div>
  );
}

export default Home;
