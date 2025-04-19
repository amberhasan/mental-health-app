// src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;