import React from "react";
import Burger from "../Burger/Burger";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Works</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Hit me up</a>
          </li>
          <li className="nav-item">
            <a href="docs/resume.pdf" download>
              My resume
            </a>
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
