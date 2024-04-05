import React, { useState } from 'react';
import './contact.css';

import Navbar from '../Navbar/navbar';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic to send the form data
  };

  return (<div>
    <Navbar />
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className='c-btn' type="submit">Submit</button>
    </form>
    <div>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Portfolio Maker</h3>
          <p>Since 2024</p>
        </div>
        
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Portfolio Maker. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  </div>
   
  );
}

export default ContactForm;
