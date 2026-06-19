import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <h6><Link to="/home">Jueun Jeon</Link></h6>

      <button
        className="nav-toggle btn-text"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        Menu
      </button>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
         <li><a href={process.env.PUBLIC_URL + "/resume_jueun_jeon.pdf"} onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer">
            Resume
          </a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
