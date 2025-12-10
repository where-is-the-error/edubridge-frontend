import React from "react";
import "../styles/history2.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const History2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="hi2-container">
      <div className="hi2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="hi2-title">과목을 선택해주세요!</h1>

      <div className="hi2-box-wrapper">
        <div className="hi2-box" onClick={() => toMain("world")}><p className="hi2-text">세계사</p></div>
        <div className="hi2-box" onClick={() => toMain("east")}><p className="hi2-text">동아시아사</p></div>
      </div>
    </div>
  );
};

export default History2;