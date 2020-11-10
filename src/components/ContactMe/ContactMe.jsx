import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ContactMe.css';
import { postContact } from '../../store/actions/misc';

const ContactMe = () => {
  const [state, setstate] = useState({ email: '', message: '' });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContact(state));
  };
  return (
    <section className="padding" id="contact">
      <h1 className="section-title">Hit Me Up</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="contact-email"
          placeholder="Your Email..."
          onChange={(e) => setstate({ ...state, email: e.target.value })}
        />
        <textarea
          name="contact"
          id="contact-text"
          cols="30"
          rows="10"
          placeholder="Drop me a line..."
          onChange={(e) => setstate({ ...state, message: e.target.value })}
        ></textarea>
        <input type="submit" id="contact-submit" value="Send" button="true" />
      </form>
    </section>
  );
};

export default ContactMe;
