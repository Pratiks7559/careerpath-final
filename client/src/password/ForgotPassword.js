import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './forgot.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('forgot-body');
    return () => {
      document.body.classList.remove('forgot-body');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/request-reset', { email });
      
      // ✅ SweetAlert2 Success
      await Swal.fire({
        icon: 'success',
        title: 'OTP Sent!',
        text: res.data.message,
        confirmButtonColor: '#3085d6',
      });

      localStorage.setItem('resetEmail', email);
      navigate('/verify-otp');
      
    } catch (err) {
      // ❌ SweetAlert2 Error
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: err.response?.data?.message || 'Failed to send OTP',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2 className="forgot-title">Forgot Password</h2>
        <p className="forgot-subtext">Enter your registered email. If you don't see the email, check your spam folder.</p>
        <form onSubmit={handleSubmit} className="forgot-form">
          <input
            type="email"
            className="forgot-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter registered email"
            required
          />
          <button type="submit" className="forgot-button">Send OTP</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
