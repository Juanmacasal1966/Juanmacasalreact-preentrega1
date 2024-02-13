import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo"><img src="/descarga.jpeg" alt="Logo" /></div>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/category/nike">Nike</Link></li>
          <li className="nav-item"><Link to="/category/addidas">Addidas</Link></li>
          <li className="nav-item"><Link to="/category/puma">Puma</Link></li>
          <li className="nav-item"><Link to="/">Inicio</Link></li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;



