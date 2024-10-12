import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="">About</Link></li>
        <li><Link to="">Menu</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
