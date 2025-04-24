// File: src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Wisata from './pages/Wisata';
import Budaya from './pages/Budaya';
import Beranda from './pages/Beranda';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
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

        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/budaya" element={<Budaya />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


