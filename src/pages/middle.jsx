import React from "react";
import "../styles/middle.css";
import { useNavigate } from "react-router-dom";
import middleimg from "../assets/agemiddle.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler"; // 👈 import

const Middle = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // 공통 선택 핸들러
  const onSelect = (grade) => handleSelection("grade", grade, navigate, "/middlesub");

  return (
    <div className="middle-container">
      <div className="middle-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="middle-title">학년을 선택해주세요!</h1>

      <div className="middle-box-wrapper">
        <div className="middle-box" onClick={() => onSelect("1")} style={{ cursor: "pointer" }}>
          <img src={middleimg} className="middle-icon" alt="1학년" />
          <p className="middle-text">1학년</p>
        </div>
        <div className="middle-box" onClick={() => onSelect("2")} style={{ cursor: "pointer" }}>
          <img src={middleimg} className="middle-icon" alt="2학년" />
          <p className="middle-text">2학년</p>
        </div>
        <div className="middle-box" onClick={() => onSelect("3")} style={{ cursor: "pointer" }}>
          <img src={middleimg} className="middle-icon" alt="3학년" />
          <p className="middle-text">3학년</p>
        </div>
      </div>
    </div>
  );
};

export default Middle;