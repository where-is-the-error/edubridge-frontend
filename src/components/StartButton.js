// src/components/StartButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  

const StartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/next');  
  };

  return (
    <button onClick={handleStartClick} className="start-button">
      Start!
    </button>
  );
};

export default StartButton;
