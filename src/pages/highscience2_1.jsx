import React from "react";
import "../styles/highscience2_1.css";
import { useNavigate } from "react-router-dom";
import { handleSelection } from "../utils/selectionHandler";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const HighScience2_1 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="sci2_1-container">
      <div className="sci2_1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="sci2_1-title">과목을 선택해주세요!</h1>

      <div className="sci2_1-box-wrapper">
        <div className="sci2_1-box" onClick={() => toMain("physics")}><p className="sci2_1-text">물리 <span className="roman">I</span></p></div>
        <div className="sci2_1-box" onClick={() => toMain("chemical")}><p className="sci2_1-text">화학 <span className="roman">I</span></p></div>
        <div className="sci2_1-box" onClick={() => toMain("lifescience")}><p className="sci2_1-text">생명 <span className="roman">I</span></p></div>
        <div className="sci2_1-box" onClick={() => toMain("earthscience")}><p className="sci2_1-text">지구 <span className="roman">I</span></p></div>
      </div>
    </div>
  );
};

export default HighScience2_1;