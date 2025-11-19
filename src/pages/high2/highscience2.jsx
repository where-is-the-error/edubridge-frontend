import React from "react";
import "./highscience2.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighScience2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  return (
    <div className="sci2-container">

      {/* 로고 */}
      <div
        className="sci2-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="sci2-logo-dot"></div>
        <h1 className="sci2-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="sci2-title">과목을 선택해주세요!</h1>

      {/* 선택 박스 */}
      <div className="sci2-box-wrapper">

        <div className="sci2-box"><img src={icon} className="sci2-icon" /><p className="sci2-text">국어</p></div>
        <div className="sci2-box"><img src={icon} className="sci2-icon" /><p className="sci2-text">수학</p></div>
        <div className="sci2-box"><img src={icon} className="sci2-icon" /><p className="sci2-text">영어</p></div>
        <div className="sci2-box"><img src={icon} className="sci2-icon" /><p className="sci2-text">과학</p></div>

      </div>
    </div>
  );
};

export default HighScience2;
