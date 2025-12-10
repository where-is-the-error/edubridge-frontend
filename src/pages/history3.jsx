import React from "react";
import "../styles/history3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const History3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="hi3-container">
      <div className="hi3-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="hi3-title">과목을 선택해주세요!</h1>

      <div className="hi3-box-wrapper">
        <div className="hi3-box" onClick={() => toMain("world")}><p className="hi3-text">세계사</p></div>
        <div className="hi3-box" onClick={() => toMain("east")}><p className="hi3-text">동아시아사</p></div>
      </div>
    </div>
  );
};

export default History3;