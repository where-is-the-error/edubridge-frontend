import React from "react";
import "../styles/highscience1.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighScience1 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const toMain = (detail) => handleSelection("scienceDetail", detail, navigate, "/mainpage");

  return (
    <div className="sci1-container">
      <div className="sci1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="sci1-title">과목을 선택해주세요!</h1>

      <div className="sci1-box-wrapper">
        <div className="sci1-box" onClick={() => toMain("integrated")}><p className="sci1-text">통합과학</p></div>
        <div className="sci1-box" onClick={() => toMain("experiment")}><p className="sci1-text">과학실험탐구</p></div>
      </div>
    </div>
  );
};

export default HighScience1;