import React from "react";
import "../styles/high.css";
import { useNavigate } from "react-router-dom";
import highimg from "../assets/agehigh.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler"; // 👈 import

const High = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  return (
    <div className="high-container">
      <div className="high-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="high-title">학년을 선택해주세요!</h1>

      <div className="high-box-wrapper">
        {/* 1학년 -> highgrade1 */}
        <div className="high-box" onClick={() => handleSelection("grade", "1", navigate, "/highgrade1")}>
          <img src={highimg} className="high-icon" alt="1학년" />
          <p className="high-text">1학년</p>
        </div>

        {/* 2학년 -> highsub2 */}
        <div className="high-box" onClick={() => handleSelection("grade", "2", navigate, "/highsub2")}>
          <img src={highimg} className="high-icon" alt="2학년" />
          <p className="high-text">2학년</p>
        </div>

        {/* 3학년 -> highsub3 */}
        <div className="high-box" onClick={() => handleSelection("grade", "3", navigate, "/highsub3")}>
          <img src={highimg} className="high-icon" alt="3학년" />
          <p className="high-text">3학년</p>
        </div>
      </div>
    </div>
  );
};

export default High;