import React, { useEffect } from 'react';
import './WelcomeSection.css';

const WelcomeSection = ({ user }) => {
  useEffect(() => {
    document.body.classList.add('b');
    return () => {
      document.body.classList.remove('b');
    };
  }, []);

  return (
    <div className="welcome-section">
      <h2 className='gg'>
        <span className="welcome-text">Welcome back, </span>
        <span className="username">{user.name}</span>
        <span className="welcome-emoji">🎉</span>
      </h2>
      <p className="intro-text">
        Begin your career journey by taking our assessment quiz. 
        We'll help you discover your strengths and match you with suitable career options.
      </p>
    </div>
  );
};

export default WelcomeSection;

