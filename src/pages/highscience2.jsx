import React from "react";
import "../styles/highscience2.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighScience2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="sci2-container">
      <div className="sci2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="sci2-title">과목을 선택해주세요!</h1>

      <div className="sci2-box-wrapper">
        <div className="sci2-box" onClick={() => toMain("korea")}><p className="sci2-text">국어</p></div>
        <div className="sci2-box" onClick={() => toMain("math")}><p className="sci2-text">수학</p></div>
        <div className="sci2-box" onClick={() => toMain("english")}><p className="sci2-text">영어</p></div>
        <div className="sci2-box" onClick={() => toMain("history")}><p className="sci2-text">한국사</p></div>
        {/* 과탐 선택 이동 */}
        <div className="sci2-box" onClick={() => handleSelection("subject", "science", navigate, "/highscience2_1")}><p className="sci2-text">자연・과학</p></div>
      </div>
    </div>
  );
};

export default HighScience2;


