import React from 'react';
import './LoginSignupModal.css'; // 👈 isko style file mein likhna hoga

const LoginSignupModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login / Sign Up</h2>

        <input type="text" placeholder="Enter Email" className="modal-input" />
        <input type="password" placeholder="Enter Password" className="modal-input" />

        <button className="auth-btn">Login</button>
        <p>Don't have an account? <a href="#">Sign up here</a></p>
      </div>
    </div>
  );
};

export default LoginSignupModal;

