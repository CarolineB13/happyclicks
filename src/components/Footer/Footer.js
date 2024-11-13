// Footer.js
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Accueil</a>
          <a href="/about" className="footer-link">À propos</a>
          <a href="/portfolio" className="footer-link">Portfolio</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-link">Facebook</a>
          <a href="https://twitter.com" className="footer-social-link">Twitter</a>
          <a href="https://linkedin.com" className="footer-social-link">LinkedIn</a>
        </div>
        <p className="footer-legal">© 2023 Happy Clicks. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
