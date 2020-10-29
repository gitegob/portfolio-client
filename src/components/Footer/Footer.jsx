import React from 'react';
import './Footer.css';
import Socials from '../Socials/Socials';
import Subscribe from '../Subscribe/Subscribe';

const Footer = () => {
  return (
    <footer className="padding">
      <Subscribe />
      <Socials />
    </footer>
  );
};

export default Footer;
