import React from 'react';

const SideNav = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="side-item">
            <a href="#home">Home</a>
          </li>
          <li className="side-item">
            <a href="#skills">What I Code</a>
          </li>
          <li className="side-item">
            <a href="#projects">Works</a>
          </li>
          <li className="side-item">
            <a href="#blogs">Blog</a>
          </li>
          <li className="side-item">
            <a href="#contact">Hit Me Up</a>
          </li>
          <li className="side-item">
            <a href="#subscribe">Subscribe</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
