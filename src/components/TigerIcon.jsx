
// src/components/TigerIcon.js
import React from 'react';
import tigerImage from '../assets/tiger.png';  // 이미지 경로

const TigerIcon = () => {
  return (
    <div className="tiger-icon">
      <img src={tigerImage} alt="호랑이" />
    </div>
  );
};

export default TigerIcon;
