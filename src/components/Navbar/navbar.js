import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img className='nav-logo' src='https://img.pikbest.com/origin/09/25/73/25qpIkbEsT5w8.png!bw700' alt='logo'/>
        </a>
        <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="/home" className="navbar-link">
              Home
            </a>
          </li>
          
          <li className="navbar-item">
            <a href="/education" className="navbar-link">
              Education
            </a>
          </li>
          <li className="navbar-item">
            <a href="/projects" className="navbar-link">
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
