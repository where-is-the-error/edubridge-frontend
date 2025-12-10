import React from "react";
import "../styles/highscience3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighScience3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="sci3-container">
      <div className="sci3-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="sci3-title">과목을 선택해주세요!</h1>

      <div className="sci3-box-wrapper">
        <div className="sci3-box" onClick={() => toMain("korea")}><p className="sci3-text">국어</p></div>
        <div className="sci3-box" onClick={() => toMain("math")}><p className="sci3-text">수학</p></div>
        <div className="sci3-box" onClick={() => toMain("english")}><p className="sci3-text">영어</p></div>
        <div className="sci3-box" onClick={() => toMain("history")}><p className="sci3-text">한국사</p></div>
        <div className="sci3-box" onClick={() => navigate("/highscience3_1")}><p className="sci3-text">자연・과학</p></div>
      </div>
    </div>
  );
};

export default HighScience3;