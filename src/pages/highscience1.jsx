import React from "react";
import "../styles/highscience1.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";

const HighScience1 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  const integrated = () => {
    saveUserData("scienceDetail", "integrated");
    navigate("/mainpage");
  };

  const experiment = () => {
    saveUserData("scienceDetail", "experiment");
    navigate("/mainpage");
  };

  return (
    <div className="sci1-container">

      {/* 로고 */}
      <div className="sci1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="sci1-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="sci1-box-wrapper">

        <div className="sci1-box" onClick={integrated}>
          <p className="sci1-text">통합과학</p>
        </div>

        <div className="sci1-box" onClick={experiment}>
          <p className="sci1-text">과학실험탐구</p>
        </div>

      </div>
    </div>
  );
};

export default HighScience1;
