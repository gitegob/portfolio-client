import React, { useContext } from 'react';
import { GlobalState } from '../../../context/global/State';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import './SideNav.css';

const SideNav = () => {
  const { state, setState } = useContext(GlobalState);
  const itemClicked = () => setState({ ...state, burgerActive: !state.burgerActive });
  return (
    <>
      <div className="sidebar" style={{ width: state.burgerActive ? '100%' : '0' }}>
        <ul className="sidebar-nav">
          <li className="side-item">
            <a href="#home" onClick={itemClicked}>
              Home
            </a>
          </li>
          <li className="side-item">
            <a href="#skills" onClick={itemClicked}>
              What I Code
            </a>
          </li>
          <li className="side-item">
            <a href="#projects" onClick={itemClicked}>
              Works
            </a>
          </li>
          <li className="side-item">
            <a href="#blogs" onClick={itemClicked}>
              Blog
            </a>
          </li>
          <li className="side-item">
            <a href="#contact" onClick={itemClicked}>
              Hit Me Up
            </a>
          </li>
          <li className="side-item">
            <a href="#subscribe" onClick={itemClicked}>
              Subscribe
            </a>
          </li>
          <li className="side-item">
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
