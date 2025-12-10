import React from "react";
import "../styles/morality.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const Morality = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="mor-container">
      <div className="mor-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="mor-title">과목을 선택해주세요!</h1>

      <div className="mor-box-wrapper">
        <div className="mor-box" onClick={() => toMain("m1")}><p className="mor-text">생활과<br />윤리</p></div>
        <div className="mor-box" onClick={() => toMain("m2")}><p className="mor-text">윤리와<br />사상</p></div>
        <div className="mor-box" onClick={() => toMain("m3")}><p className="mor-text">경제</p></div>
        <div className="mor-box" onClick={() => toMain("m4")}><p className="mor-text">정치와 법</p></div>
        <div className="mor-box" onClick={() => toMain("m5")}><p className="mor-text">사회・문화</p></div>
      </div>
    </div>
  );
};

export default Morality;