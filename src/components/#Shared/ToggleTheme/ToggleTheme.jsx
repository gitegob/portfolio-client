import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Toggle from 'react-toggle';
import { GlobalState } from '../../../context/global/State';
// import Icon from '../Icon/Icon';
import './ToggleTheme.css';

const Icon = ({ solid, name }) => {
  const type = solid ? 'fas' : 'far';
  return <i className={`${type} ${name}`}></i>;
};
const ToggleTheme = () => {
  const { state, setState } = useContext(GlobalState);
  const bodyClass = document.querySelector('body').classList;
  useEffect(() => {
    bodyClass.remove('dark', 'light');
    bodyClass.add(state.theme);
  }, []);
  const toggle = (e) => {
    setState({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark' });
    bodyClass.remove('dark', 'light');
    bodyClass.add(state.theme);
    console.log(state.theme);
    localStorage.setItem('theme', state.theme);
  };

  return (
    <Toggle
      defaultChecked={state.theme === 'dark'}
      icons={{
        checked: <Icon solid name="fa-moon" />,
        unchecked: <Icon solid name="fa-sun" />,
      }}
      onChange={(e) => toggle(e)}
    />
  );
};

export default ToggleTheme;
