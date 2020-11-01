/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import Toggle from 'react-toggle';
import './ToggleTheme.css';

const Icon = ({ solid, name }) => {
  const type = solid ? 'fas' : 'far';
  return <i className={`${type} ${name}`}></i>;
};
const ToggleTheme = () => {
  const bodyClass = document.querySelector('body').classList;
  useEffect(() => {
    bodyClass.remove('light');
    JSON.parse(localStorage.getItem('isLightTheme')) === true && bodyClass.add('light');
  }, []);
  const toggle = (e) => {
    bodyClass.toggle('light');
    bodyClass.contains('light') && localStorage.setItem('isLightTheme', true);
    !bodyClass.contains('light') && localStorage.removeItem('isLightTheme');
  };
  return (
    <Toggle
      defaultChecked={JSON.parse(localStorage.getItem('isLightTheme')) !== true}
      icons={{
        checked: <Icon solid name="fa-moon" />,
        unchecked: <Icon solid name="fa-sun" />,
      }}
      onChange={(e) => toggle(e)}
    />
  );
};

export default ToggleTheme;
