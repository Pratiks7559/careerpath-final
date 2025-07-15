// In src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ title, children, onClick }) => (
  <div className="card" onClick={onClick}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

export default Card;
