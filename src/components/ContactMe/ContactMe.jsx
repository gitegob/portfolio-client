import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <section className="padding" id="contact">
      <h1 className="section-title">Hit Me Up</h1>
      <form id="contact-form">
        <input type="email" name="email" id="contact-email" placeholder="Your Email..." />
        <textarea name="contact" id="contact-text" cols="30" rows="10" placeholder="Request? Suggestion? Feedback? Talk to me..."></textarea>
        <input type="submit" id="contact-submit" value="Send" button="true" />
      </form>
    </section>
  );
};

export default ContactMe;
