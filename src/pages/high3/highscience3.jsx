import React from "react";
import "./highscience3.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighScience3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  return (
    <div className="sci3-container">

      {/* 로고 */}
      <div
        className="sci3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="sci3-logo-dot"></div>
        <h1 className="sci3-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="sci3-title">과목을 선택해주세요!</h1>

      {/* 박스 */}
      <div className="sci3-box-wrapper">

        <div className="sci3-box"><img src={icon} className="sci3-icon" /><p className="sci3-text">국어</p></div>
        <div className="sci3-box"><img src={icon} className="sci3-icon" /><p className="sci3-text">수학</p></div>
        <div className="sci3-box"><img src={icon} className="sci3-icon" /><p className="sci3-text">영어</p></div>
        <div className="sci3-box"><img src={icon} className="sci3-icon" /><p className="sci3-text">과학</p></div>

      </div>
    </div>
  );
};

export default HighScience3;
