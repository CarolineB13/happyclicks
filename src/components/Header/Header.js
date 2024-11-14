import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/Happy Clicks.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Happy Clicks Logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">À propos</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
