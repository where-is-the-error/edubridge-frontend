import React from "react";
import "../styles/AI.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger3 from "../assets/tiger3.png";
import { useNavigate } from "react-router-dom";



const AI = () => {
    const navigate = useNavigate();

    const goHomeAfter = () => navigate("/homeafter");
  return (
    <div className="AI-container">

      {/* 좌측 상단 로고 */}
      <div className="AI-logo" onClick={goHomeAfter} style={{cursor: "pointer"}}>
        <img src={logo} className="logo" alt="logo-dot" />
        <img src={logotext} className="logotext" alt="logo-text" />
      </div>

      {/* 중앙 제목 */}
      <h1 className="AI-title">
        <span className="AI-strong">AI</span>
        <span className="AI-rest">의 맞춤 문제 제작</span>
      </h1>

      {/* 호랑이 단독 */}
      <div className="AI-tiger-wrapper">
        <img src={tiger3} className="tiger3-img" alt="tiger" />
      </div>

      {/* 입력창 단독 */}
      <div className="AI-input-wrapper">
        <input
          className="AI-input"
          placeholder="원하시는 문제를 입력해주세요"
        />
      </div>

    </div>
  );
};

export default AI;
