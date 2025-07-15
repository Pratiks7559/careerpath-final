import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import './otp.css';

function VerifyOTP() {
  const [otp, setOtp] = useState('');
  const email = localStorage.getItem('resetEmail');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('verify-body');
    return () => {
      document.body.classList.remove('verify-body');
    };
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/verify-otp', { email, otp });

      Swal.fire({
        icon: 'success',
        title: 'OTP Verified 🎉',
        text: res.data.message,
        confirmButtonColor: '#3085d6',
      }).then(() => {
        navigate('/reset-password');
      });
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Verification Failed ❌',
        text: err.response?.data?.message || 'Invalid or expired OTP',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="otp-wrapper">
      <h2 className="otp-heading">Verify OTP</h2>
      <p className="otp-instruction">
        We’ve sent a 6-digit OTP to <strong>{email}</strong>. <br />
        📩 Please check your <strong>Inbox</strong> and <strong>Spam/Junk</strong> folder.
      </p>
      <form onSubmit={handleVerify} className="otp-form">
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
          className="otp-input"
        />
        <button type="submit" className="otp-button">
          Verify
        </button>
      </form>
    </div>
  );
}

export default VerifyOTP;
