import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
