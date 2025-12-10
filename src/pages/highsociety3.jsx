import React from "react";
import "../styles/highsociety3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighSociety3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="soc3-container">
      <div className="soc3-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="soc3-title">과목을 선택해주세요!</h1>

      <div className="soc3-box-wrapper">
        <div className="soc3-box" onClick={() => toMain("korea")}><p className="soc3-text">국어</p></div>
        <div className="soc3-box" onClick={() => toMain("math")}><p className="soc3-text">수학</p></div>
        <div className="soc3-box" onClick={() => toMain("english")}><p className="soc3-text">영어</p></div>
        <div className="soc3-box" onClick={() => toMain("history")}><p className="soc3-text">한국사</p></div>
        <div className="soc3-box" onClick={() => navigate("/highsociety3_1")}><p className="soc3-text">인문・사회</p></div>
      </div>
    </div>
  );
};

export default HighSociety3;


