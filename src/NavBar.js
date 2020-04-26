import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav><ul>
      <li><Link to="/alcoholic">Alcoholic</Link></li>
      <li><Link to="/non-alcoholic">Non Alcoholic</Link></li>
      <li><Link to="/ordinary">Ordinary Drink</Link></li>
      <li><Link to="/cocktail-glasses">Cocktail glass</Link></li>
      <li><Link to="/champagne-flutes">Champagne flute</Link></li>
    </ul></nav>
  );
}

export default Navbar;