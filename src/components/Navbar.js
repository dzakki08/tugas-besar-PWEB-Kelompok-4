import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
          <h1>Explore Bengkulu</h1>
          <div>
            <Link to="/">Beranda</Link>
            <Link to="/wisata">Wisata</Link>
            <Link to="/budaya">Budaya</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
    </nav>
  );
}

export default Navbar;