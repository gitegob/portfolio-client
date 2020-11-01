import React from 'react';
import Burger from '../Burger/Burger';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#skills">What I Code</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Works</a>
          </li>
          <li className="nav-item">
            <a href="#blogs">Blog</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Hit Me Up</a>
          </li>
          <li className="nav-item">
            <a href="#subscribe">Subscribe</a>
          </li>
          <li className="nav-item">
            <ToggleTheme />
          </li>
        </ul>
        <Burger />
      </nav>
    </>
  );
};

export default NavBar;
