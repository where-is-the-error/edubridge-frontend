import React from "react";
import "../styles/highsociety2.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighSociety2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="soc2-container">
      <div className="soc2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="soc2-title">과목을 선택해주세요!</h1>

      <div className="soc2-box-wrapper">
        <div className="soc2-box" onClick={() => toMain("korea")}><p className="soc2-text">국어</p></div>
        <div className="soc2-box" onClick={() => toMain("math")}><p className="soc2-text">수학</p></div>
        <div className="soc2-box" onClick={() => toMain("english")}><p className="soc2-text">영어</p></div>
        <div className="soc2-box" onClick={() => toMain("history")}><p className="soc2-text">한국사</p></div>
        {/* 탐구 영역 이동 */}
        <div className="soc2-box" onClick={() => navigate("/highsociety2_1")}><p className="soc2-text">인문・사회</p></div>
      </div>
    </div>
  );
};

export default HighSociety2;