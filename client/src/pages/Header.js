import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaBriefcase, FaBook, FaUser, FaSignOutAlt } from 'react-icons/fa';
import CareerPathLogo from './CareerPathLogo';
import './Header.css';

const Header = ({ onLogout }) => {
  useEffect(() => {
    document.body.classList.add('cb'); // Adding class to body tag

    return () => {
      document.body.classList.remove('cb'); // Removing class on unmount
    };
  }, []);

  return (
    <header className="header">
        
      <div className="header-logo-container">
      <CareerPathLogo  />

        {/* <h1 className="header-logo">CareerPath</h1> */}
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <FaHome className="nav-icon" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quiz">
              <FaChartLine className="nav-icon" /> Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/career">
              <FaBriefcase className="nav-icon" /> Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resources">
              <FaBook className="nav-icon" /> Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <FaUser className="nav-icon" /> Profile
            </Link>
          </li>
          <li className="nav-item">
            <button className="logout-btn" onClick={onLogout}>
              <FaSignOutAlt className="logout-icon" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
