import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <div className="homepage-container">
      
      {/* Navbar Container */}
      <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
        {/* Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav Links */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/partners" className="nav-link">PARTNERS WITH U.S WEST CARGO</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </div>

        {/* Search Form aligned to top-right */}
        <form className="form-inline ml-1">
          <div className="input-group">
            <div className="input-group-append">
              <button className="btn btn-long " type="button">Log in</button>
            </div>
          </div>
        </form>

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src='./images/l2l.png' className="img-fluid custom-logo" alt="Logo" />
        </a>
      </nav>
    </div>
  );
};

export default Header;
