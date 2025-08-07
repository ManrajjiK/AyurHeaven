import React, { useState } from 'react';
import './Header.css';
import './Header2.css'; // is file me popup ka style hoga

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false); // Modal show/hide control

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Searching for:', e.target.value);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">

          <div className="left-section">
            <div className="logo"></div>
            <span className="brand-name">E-AYURVEDA</span>
          </div>

          <div className="center-section">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by plant, ailment, or health goal..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="nav-section">
            <a href="#home">Home</a>
            <a href="#plants">Medicinal Plants</a>
            <a href="#learn">Learn Ayurveda</a>
            <a href="#virtual-tour">Virtual Tour</a>
            <a href="#contact">Connect</a>
            <a href="#" onClick={toggleModal}>Login/SignUp</a> {/* <-- This is the trigger */}
          </div>
        </div>
      </header>

      {/* 👇 MODAL 👇 */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>✖</span>
            <h2>Login to E-AYURVEDA</h2>
            <input className="mail" type="email" placeholder="Enter your email" />
            <input className="mail" type="password" placeholder="Enter your password" />
            <button className="login-btn">Login</button>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
