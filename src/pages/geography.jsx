import React from "react";
import "../styles/geography.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const Geography = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="geo-container">
      <div className="geo-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="geo-title">과목을 선택해주세요!</h1>

      <div className="geo-box-wrapper">
        <div className="geo-box" onClick={() => toMain("koreageography")}><p className="geo-text">한국지리</p></div>
        <div className="geo-box" onClick={() => toMain("worldgeography")}><p className="geo-text">세계지리</p></div>
      </div>
    </div>
  );
};

export default Geography;