import React from "react";
import "./middle.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Middle = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  // 학년 선택 후 → middlesub 이동
  const goMiddleSub = () => {
    navigate("/middlesub");
  };

  return (
    <div className="middle-container">

      {/* 로고 */}
      <div
        className="middle-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="middle-logo-dot"></div>
        <h1 className="middle-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="middle-title">학년을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="middle-box-wrapper">

        {/* 1학년 */}
        <div className="middle-box" onClick={goMiddleSub} style={{ cursor: "pointer" }}>
          <img src={icon} className="middle-icon" alt="icon" />
          <p className="middle-text">1학년</p>
        </div>

        {/* 2학년 */}
        <div className="middle-box" onClick={goMiddleSub} style={{ cursor: "pointer" }}>
          <img src={icon} className="middle-icon" alt="icon" />
          <p className="middle-text">2학년</p>
        </div>

        {/* 3학년 */}
        <div className="middle-box" onClick={goMiddleSub} style={{ cursor: "pointer" }}>
          <img src={icon} className="middle-icon" alt="icon" />
          <p className="middle-text">3학년</p>
        </div>

      </div>
    </div>
  );
};

export default Middle;
