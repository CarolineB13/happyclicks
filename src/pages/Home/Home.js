import React from 'react';
import SEO from "../../components/SEO/SEO"
import { Link } from 'react-router-dom';
import './Home.css';
import maPhoto from '../../assets/Caroline.webp';
import LinkedInBadge from '../../components/LinkedInBadge/LinkedInBadge';
import Services from '../../components/Services/Services';
import GoogleReviews from '../../components/GoogleReviews/GoogleReviews'

function Home() {
  return (
    <div className="home">
      {/* SEO */}
      <SEO
        title="HappyClicks - Développeuse Web à Aubagne"
        description="Bienvenue chez HappyClicks ! Caroline, développeuse web spécialisée en front-end à Aubagne, crée des sites modernes, performants et optimisés SEO."
        keywords="développeuse web, Aubagne, création site internet, front-end, SEO, sites responsives, freelance, HappyClicks"
        url="https://happyclicks.fr/"
        image="https://happyclicks.fr/happyclicks-social.png"
      />
      {/* Section de Bienvenue */}
      <section className="welcome-section">
        <h1>Bienvenue chez HappyClicks</h1>
        <p>Votre partenaire en solutions digitales modernes et performantes à Aubagne.</p>
        <Link to="/portfolio" className="cta-button" aria-label="Voir les projets de Caroline">
          Voir mes projets
        </Link>
      </section>

      {/* Section Présentation */}
      <section className="about-section">
      <h2>À propos de moi</h2>
        <div className="about-content">
          <div className="about-photo">
            <img src={maPhoto} alt="Caroline, développeuse web à Aubagne" loading="lazy" />
          </div>
          <div className="about-text">
            <div className="about-text__paragraph">
            <p>
            Après plus de 15 ans en tant qu'assistante de gestion, j'ai décidé de suivre ma passion pour le développement web et d'entamer une reconversion professionnelle. 
            Aujourd'hui, je suis développeuse web spécialisée dans le front-end, avec une expertise en création de sites modernes et performants.
            </p>
            <p>
            Mon parcours chez Openclassrooms m'a permis de maîtriser des technologies comme HTML, CSS, JavaScript, React et Redux, et d'acquérir une solide expérience dans la conception de sites responsives. 
            Je m'attache à rendre chaque projet accessible, adapté à tous les écrans, et optimisé pour offrir une expérience utilisateur fluide et agréable.
            </p>
            <p>
            En tant que passionnée par l'apprentissage continu, je suis toujours curieuse de découvrir de nouvelles technologies et d'affiner mes compétences. Basée à Aubagne, 
            je peux me déplacer dans les Bouches-du-Rhône et le Var pour collaborer avec des entreprises locales ou travailler sur des projets à distance.
            </p>
            <p>
            Enfin, j'accorde une attention particulière au référencement naturel (SEO) pour garantir que chaque site que je développe soit visible, 
            performant, et contribue à la stratégie digitale de mes clients.
            </p>
          </div>
        </div>
        <div className="linkedin-badge">
        <LinkedInBadge />
        </div>
        </div>
        <Link to="/contact" className="cta-button">
          Contactez-moi
        </Link>
      </section>

      {/* Section Services / Compétences */}
      <Services />

      {/* Section Témoignages */}
      <section className="testimonials-section">
        <h2>Ce qu'on dit de mon travail</h2>
        <GoogleReviews />
      </section>
    </div>
  );
}

export default Home;
