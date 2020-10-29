import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <section className="padding" id="subscribe">
      <h3 className="section-title">Get new blog posts straight to your email</h3>
      <form id="form-subscribe">
        <input type="text" placeholder="Your Email..." />
        <button type="submit" id="submit-subscribe">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
