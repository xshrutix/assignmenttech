import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CustomNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom mt-3">
      <div className="container">
        <a className="navbar-brand ms-5" href="#home">
          <h5><i className="bi bi-people-fill text-primary me-1"></i>ServifyTech</h5>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-2">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link me-2" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link" href="#careers">Careers</a>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to="/contact">Contacts</Link>
            </li>
          </ul>
          <button className="btn btn-primary ml-auto me-5 rounded-pill " style={{ fontSize: '14px' }}>LET'S TALK</button>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
