import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    profilePhoto: null,
    name: '',
    email: '',
    gender: '',
    age: '',
    highestEducation: '',
    password: ''
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [rules, setRules] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    symbol: false
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setForm({ ...form, profilePhoto: files[0] });
    } else {
      setForm({ ...form, [name]: value });

      if (name === 'password') {
        checkPasswordStrength(value);
        checkPasswordRules(value);
      }
    }
  };

  const checkPasswordRules = (password) => {
    setRules({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /\d/.test(password),
      symbol: /[@$!%*?&]/.test(password)
    });
  };

  const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*\d))|((?=.*[A-Z])(?=.*\d))).{6,}$/;

    if (strongRegex.test(password)) setPasswordStrength('strong');
    else if (mediumRegex.test(password)) setPasswordStrength('medium');
    else setPasswordStrength('weak');
  };

  const validateForm = () => {
    const { profilePhoto, name, email, gender, age, highestEducation, password } = form;

    if (!profilePhoto) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Profile Photo',
        text: 'Please upload your profile photo.',
        confirmButtonColor: '#ffa000'
      });
      return false;
    }

    if (!name || !email || !gender || !age || !highestEducation || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in all fields before submitting.',
        confirmButtonColor: '#ffa000'
      });
      return false;
    }

    if (passwordStrength === 'weak') {
      Swal.fire({
        icon: 'warning',
        title: 'Weak Password',
        text: 'Please use a stronger password.',
        confirmButtonColor: '#e53935'
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      document.querySelector('form').classList.add('shake');
      setTimeout(() => {
        document.querySelector('form').classList.remove('shake');
      }, 400);
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    try {
      await axios.post("/api/auth/register", formData);

      confetti({
        particleCount: 80,
        spread: 100,
        ticks: 200,
        origin: { y: 0.6 },
        shapes: ['circle'],
        scalar: 1.2,
      });

      setTimeout(() => {
        confetti({
          particleCount: 30,
          spread: 360,
          startVelocity: 50,
          gravity: 0.4,
          decay: 0.92,
          scalar: 1.5,
          emojis: ['🎉', '🌟', '🚀', '💥', '🔥'],
        });
      }, 300);

      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Welcome to CareerPath 🎓',
        timer: 2500,
        showConfirmButton: false
      });

      setTimeout(() => navigate('/login'), 2600);

    } catch (err) {
      console.error("❌ Registration error:", err);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: err.response?.data?.message || 'Something went wrong!',
        confirmButtonColor: '#d33'
      });
    }
  };

  const getTick = (isValid) => (
    <span style={{ color: isValid ? 'green' : 'gray', fontWeight: 'bold' }}>
      {isValid ? '✔' : '✖'}
    </span>
  );

  useEffect(() => {
    document.body.classList.add('regg');
    return () => document.body.classList.remove('regg');
  }, []);

  return (
    <div className="register-form22">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="photo-upload22">
          {form.profilePhoto && (
            <img
              src={URL.createObjectURL(form.profilePhoto)}
              alt="Preview"
              className="photo-preview22"
            />
          )}
          <label htmlFor="profilePhoto22" className="photo-label22">📸</label>
          <input
            id="profilePhoto22"
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleChange}
            hidden
          />
        </div>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className='gau22' />
        <input type="email" name="email" placeholder="Email" className='gau22' onChange={handleChange} />
        <select name="gender" onChange={handleChange} className='c22'>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="number" name="age" className='gau22' placeholder="Age" onChange={handleChange} />
        <input type="text" name="highestEducation" placeholder="Highest Education" className='gau22' onChange={handleChange} />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          className='gau22'
          onChange={handleChange}
          autoComplete="new-password"
          onFocus={() => setShowRules(true)}
          onBlur={() => setTimeout(() => setShowRules(false), 200)}
        />

        <button
          type="button"
          className="toggle-rules-btn22"
          onClick={() => setShowRules(!showRules)}
        >
          {showRules ? 'Hide Rules ▲' : 'Show Rules ▼'}
        </button>

        <p>
          Password Strength:{' '}
          <strong style={{
            color: passwordStrength === 'strong' ? 'green' :
              passwordStrength === 'medium' ? 'orange' : 'red'
          }}>
            {passwordStrength.toUpperCase()}
          </strong>
        </p>

        {showRules && (
          <div className="password-rules-box22">
            <p>Password must include:</p>
            <p>{getTick(rules.upper)} 1 Uppercase letter</p>
            <p>{getTick(rules.lower)} 1 Lowercase letter</p>
            <p>{getTick(rules.number)} 1 Number</p>
            <p>{getTick(rules.symbol)} 1 Special character (@$!%*?&)</p>
            <p>{getTick(rules.length)} Minimum 8 characters</p>
          </div>
        )}

        <button type="submit" className='ye22'>Register</button>
      </form>

      <p style={{ marginTop: '15px', fontSize: '0.95rem' }}>
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
