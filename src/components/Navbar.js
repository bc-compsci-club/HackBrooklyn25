import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#tracks">Tracks</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#sponsors">Sponsors</a></li>
    </ul>
  </nav>
);

export default Navbar;
