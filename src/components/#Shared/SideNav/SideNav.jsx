import React, { useContext } from "react";
import { GlobalState } from "../../../context/global/State";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import "./SideNav.css";

const SideNav = () => {
  const { state, setState } = useContext(GlobalState);
  const itemClicked = () =>
    setState({ ...state, burgerActive: !state.burgerActive });
  return (
    <>
      <div
        className="sidebar"
        style={{ width: state.burgerActive ? "100%" : "0" }}
      >
        <ul className="sidebar-nav">
          <li className="side-item">
            <a href="#home" onClick={itemClicked}>
              Home
            </a>
          </li>
          <li className="side-item">
            <a href="#skills" onClick={itemClicked}>
              Skills
            </a>
          </li>
          <li className="side-item">
            <a href="#projects" onClick={itemClicked}>
              Works
            </a>
          </li>
          <li className="side-item">
            <a href="#contact" onClick={itemClicked}>
              Hit me up
            </a>
          </li>
          <li className="side-item">
            <a href="docs/resume.pdf" download>
              My resume
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
