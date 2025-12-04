import React from "react";
import "../styles/elegrade.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler"; // 👈 이것만 import

const EleGrade = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // 이제 함수 하나로 모든 학년 처리가 가능합니다.
  const onSelect = (grade) => handleSelection("grade", grade, navigate, "/ele");

  return (
    <div className="elegrade-container">
      <div className="elegrade-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="elegrade-title">학년을 선택해주세요!</h1>

      <div className="elegrade-box-wrapper">
        <div className="elegrade-box" onClick={() => onSelect("1")}><p className="elegrade-text">1학년</p></div>
        <div className="elegrade-box" onClick={() => onSelect("2")}><p className="elegrade-text">2학년</p></div>
        <div className="elegrade-box" onClick={() => onSelect("3")}><p className="elegrade-text">3학년</p></div>
        <div className="elegrade-box" onClick={() => onSelect("4")}><p className="elegrade-text">4학년</p></div>
        <div className="elegrade-box" onClick={() => onSelect("5")}><p className="elegrade-text">5학년</p></div>
        <div className="elegrade-box" onClick={() => onSelect("6")}><p className="elegrade-text">6학년</p></div>
      </div>
    </div>
  );
};

export default EleGrade;