import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './reset.css';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [rules, setRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  });

  const email = localStorage.getItem('resetEmail');

  useEffect(() => {
    document.body.classList.add('reset-body');
    return () => {
      document.body.classList.remove('reset-body');
    };
  }, []);

  useEffect(() => {
    const len = newPassword.length >= 8;
    const up = /[A-Z]/.test(newPassword);
    const low = /[a-z]/.test(newPassword);
    const num = /[0-9]/.test(newPassword);
    const sym = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

    setRules({ length: len, uppercase: up, lowercase: low, number: num, symbol: sym });

    const passed = [len, up, low, num, sym].filter(Boolean).length;
    if (passed <= 2) setStrength('Weak');
    else if (passed === 3 || passed === 4) setStrength('Medium');
    else if (passed === 5) setStrength('Strong');
  }, [newPassword]);

  const handleReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      Swal.fire('Mismatch', "Passwords don't match!", 'error');
      return;
    }

    const isValid = Object.values(rules).every(Boolean);
    if (!isValid) {
      Swal.fire('Invalid Password', 'Password does not meet all requirements.', 'warning');
      return;
    }

    try {
      const res = await axios.post('/api/auth/reset-password', { email, newPassword });
      await Swal.fire('Success', res.data.message, 'success');
      localStorage.removeItem('resetEmail');
      window.location.href = '/login';
    } catch (err) {
      Swal.fire('Error', err.response?.data?.message || 'Failed to reset password', 'error');
    }
  };

  const Rule = ({ label, condition }) => (
    <li className={`rule-item ${condition ? 'valid' : 'invalid'}`}>
      {condition ? '✅' : '❌'} {label}
    </li>
  );

  return (
    <div className="reset-container">
      <h2 className="reset-title">Reset Password</h2>
      <form onSubmit={handleReset} className="reset-form">
        <input
          className="reset-input"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          className="reset-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <p className="password-strength">
          Password Strength: <strong>{strength}</strong>
        </p>

        <ul className="rules-list">
          <Rule label="At least 8 characters" condition={rules.length} />
          <Rule label="At least 1 uppercase letter" condition={rules.uppercase} />
          <Rule label="At least 1 lowercase letter" condition={rules.lowercase} />
          <Rule label="At least 1 number" condition={rules.number} />
          <Rule label="At least 1 symbol" condition={rules.symbol} />
        </ul>

        <button type="submit" className="reset-button">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
