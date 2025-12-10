import React from "react";
import "../styles/highscience3_1.css";
import { useNavigate } from "react-router-dom";
import { handleSelection } from "../utils/selectionHandler";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const HighScience3_1 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="sci3_1-container">
      <div className="sci3_1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="sci3_1-title">과목을 선택해주세요!</h1>

      <div className="sci3_1-box-wrapper">
        <div className="sci3_1-box" onClick={() => toMain("physics2")}><p className="sci3_1-text">물리 <span className="roman">II</span></p></div>
        <div className="sci3_1-box" onClick={() => toMain("chemical2")}><p className="sci3_1-text">화학 <span className="roman">II</span></p></div>
        <div className="sci3_1-box" onClick={() => toMain("lifescience2")}><p className="sci3_1-text">생명 <span className="roman">II</span></p></div>
        <div className="sci3_1-box" onClick={() => toMain("earthscience2")}><p className="sci3_1-text">지구 <span className="roman">II</span></p></div>
      </div>
    </div>
  );
};

export default HighScience3_1;