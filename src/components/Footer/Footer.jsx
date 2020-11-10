import React from 'react';
import './Footer.css';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <footer className="padding">
      <Socials />
      <div className="copyright text-center">&copy;2020 Brian Gitego</div>
    </footer>
  );
};

export default Footer;
