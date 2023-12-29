import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo"><img src="/descarga.jpeg" alt="Logo" /></div>
        <ul className="nav-list">
          <li className="nav-item">Inicio</li>
          <li className="nav-item">Tienda</li>
          <li className="nav-item">Contacto</li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;
