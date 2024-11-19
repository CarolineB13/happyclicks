import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
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
        
        <div className="footer-links-container">
          <div className="footer-links">
            <Link to="/" className="footer-link">Accueil</Link>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
          </div>
          <p className="footer-legal">© 2024 HappyClicks. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
