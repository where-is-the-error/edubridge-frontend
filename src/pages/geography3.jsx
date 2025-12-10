import React from "react";
import "../styles/geography3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const Geography3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="geo3-container">
      <div className="geo3-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="geo3-title">과목을 선택해주세요!</h1>

      <div className="geo3-box-wrapper">
        <div className="geo3-box" onClick={() => toMain("koreageography")}><p className="geo3-text">한국지리</p></div>
        <div className="geo3-box" onClick={() => toMain("worldgeography")}><p className="geo3-text">세계지리</p></div>
      </div>
    </div>
  );
};

export default Geography3;