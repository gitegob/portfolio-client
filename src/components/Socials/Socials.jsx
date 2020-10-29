import React from 'react';
import './Socials.css';

const Socials = () => {
  return (
    <section className="padding" id="social-section">
      <h3 className="section-title">Follow Me</h3>
      <div id="socials">
        <div className="linkedin">
          <a href="https://linkedin.com/in/brian-gitego" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/linkedin2x.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="twitter">
          <a href="https://twitter.com/gbrian98" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/twitter2x.png" alt="Twitter" />
          </a>
        </div>
        <div className="facebook">
          <a href="https://facebook.com/brian.gitego" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/facebook2x.png" alt="Facebook" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://instagram.com/gbrian__" target="_blank" rel="noopener noreferrer">
            <img src="/images/social/instagram2x.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
