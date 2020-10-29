import React from 'react';
import './Icon.css';

const Icon = ({ solid, name }) => {
  const type = solid ? 'fas' : 'far';
  return <span className={`${type} ${name}`}></span>;
};

export default Icon;
