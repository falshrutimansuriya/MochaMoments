import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Mocha Moments ☕</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;