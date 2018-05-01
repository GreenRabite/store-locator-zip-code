import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar-dark"><p>Get $50 + $15 Credit*</p></nav>
      <nav className="navbar-white">
        <div id="logos">
          <img src="./images/logo.jpg"></img>
          <button className="green-temp btn">Sign Up</button>
        </div>
      </nav>
    </nav>
  );
};

export default NavBar;
