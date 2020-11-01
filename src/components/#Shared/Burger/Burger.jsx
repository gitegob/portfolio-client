import React from 'react';
import { useContext } from 'react';
import { GlobalState } from '../../../context/global/State';
import './Burger.css';

const Burger = () => {
  const { state, setState } = useContext(GlobalState);
  return (
    <div
      className={state.burgerActive ? 'burger-icon burger-active' : 'burger-icon'}
      onClick={() => setState({ ...state, burgerActive: !state.burgerActive })}
    >
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
      <div className="burger-bar"></div>
    </div>
  );
};

export default Burger;
