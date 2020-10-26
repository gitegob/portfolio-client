import React from 'react';

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
        </ul>
        <div className="burger-icon">
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
