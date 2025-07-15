// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import CareerPathLogo from './CareerPathLogo';
// import './Login.css';

// function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '' });

//   useEffect(() => {
//     document.body.classList.add('login-page');
//     return () => {
//       document.body.classList.remove('login-page');
//     };
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = form;

//     try {
//       await axios.post("/api/auth/login", { email, password });

//       alert('✅ Login successful!');
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('❌ Login error:', err);
//       alert(err.response?.data?.message || 'Invalid credentials!');
//     }
//   };

//   return (
//     <div className="login-wrapper">
    
//       <div className="login-box">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleSubmit} className="login-form" autoComplete="off">

//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className="form-input"
//               autoComplete="off"
//             />
//             <label className="form-label">Email</label>
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className="form-input"
//               autoComplete="new-password"
//             />
//             <label className="form-label">Password</label>
//           </div>

//           {/* Forgot Password Link */}
          

//           <button type="submit" className="login-button">Login</button>
//           <p className="forgot-password-text">
//             <span className="forgot-link" onClick={() => navigate('/forgot-password')}>
//               Forgot Password?
//             </span>
//           </p>

//           <p className="login-register-text">
//             Don't have an account?{' '}
//             <span className="register-link" onClick={() => navigate('/register')}>
//               Register
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
// File: src/pages/Login.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    try {
      await axios.post("/api/auth/login", { email, password });

      // Show success popup
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back 👋',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => navigate('/dashboard'), 2100);

    } catch (err) {
      console.error('❌ Login error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
        text: err.response?.data?.message || 'Invalid credentials!',
        confirmButtonColor: '#d33'
      });
    }
  };

  return (
    <div className="login-wrapper21">
      <div className="login-box21">
        <h2 className="login-title21">Login</h2>
        <form onSubmit={handleSubmit} className="login-form21" autoComplete="off">

          <div className="form-group21">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="form-input21"
              autoComplete="off"
            />
            <label className="form-label21">Email</label>
          </div>

          <div className="form-group21">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder=" "
              className="form-input21"
              autoComplete="new-password"
            />
            <label className="form-label22">Password</label>
          </div>

          <button type="submit" className="login-button21">Login</button>

          <p className="forgot-password-text21">
            <span className="forgot-link21" onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </span>
          </p>

          <p className="login-register-text21">
            Don't have an account?{' '}
            <span className="register-link21" onClick={() => navigate('/register')}>
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
