import React from 'react';
import './Footer.css';
import Socials from '../Socials/Socials';
import Subscribe from '../Subscribe/Subscribe';

const Footer = () => {
  return (
    <footer className="padding">
      <Subscribe />
      <Socials />
      <div className="copyright text-center">&copy;2020 Brian Gitego</div>
    </footer>
  );
};

export default Footer;
