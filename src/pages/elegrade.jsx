import React from "react";
import "../styles/elegrade.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";

const EleGrade = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  const selectGrade = (grade) => {
    saveUserData("grade", grade);
    navigate("/ele");
  };

  return (
    <div className="elegrade-container">

      {/* 로고 */}
      <div
        className="elegrade-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="elegrade-title">학년을 선택해주세요!</h1>

      {/* 학년 선택 박스 */}
      <div className="elegrade-box-wrapper">

        <div className="elegrade-box" onClick={() => selectGrade("1")}>
          <p className="elegrade-text">1학년</p>
        </div>

        <div className="elegrade-box" onClick={() => selectGrade("2")}>
          <p className="elegrade-text">2학년</p>
        </div>

        <div className="elegrade-box" onClick={() => selectGrade("3")}>
          <p className="elegrade-text">3학년</p>
        </div>

        <div className="elegrade-box" onClick={() => selectGrade("4")}>
          <p className="elegrade-text">4학년</p>
        </div>

        <div className="elegrade-box" onClick={() => selectGrade("5")}>
          <p className="elegrade-text">5학년</p>
        </div>

        <div className="elegrade-box" onClick={() => selectGrade("6")}>
          <p className="elegrade-text">6학년</p>
        </div>

      </div>
    </div>
  );
};

export default EleGrade;
