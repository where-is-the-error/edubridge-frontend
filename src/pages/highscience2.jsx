import React from "react";
import "../styles/highscience2.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const HighScience2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // ⬇ 과목 선택 시 저장 + 이동
  const korea = () => {
    saveUserData("subject", "korea");
    navigate("/mainpage");
  };

  const math = () => {
    saveUserData("subject", "math");
    navigate("/mainpage");
  };

  const english = () => {
    saveUserData("subject", "english");
    navigate("/mainpage");
  };

  const science = () => {
    saveUserData("subject", "science");
    navigate("/mainpage");
  };

  return (
    <div className="sci2-container">

      {/* 로고 */}
      <div
        className="sci2-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="sci2-logo-dot"></div>
        <h1 className="sci2-logo-text">EduBridge</h1>
      </div>

      {/* 제목 */}
      <h1 className="sci2-title">과목을 선택해주세요!</h1>

      {/* 선택 박스 */}
      <div className="sci2-box-wrapper">

        <div className="sci2-box" onClick={korea} style={{ cursor: "pointer" }}>
          <img src={icon} className="sci2-icon" alt="icon" />
          <p className="sci2-text">국어</p>
        </div>

        <div className="sci2-box" onClick={math} style={{ cursor: "pointer" }}>
          <img src={icon} className="sci2-icon" alt="icon" />
          <p className="sci2-text">수학</p>
        </div>

        <div className="sci2-box" onClick={english} style={{ cursor: "pointer" }}>
          <img src={icon} className="sci2-icon" alt="icon" />
          <p className="sci2-text">영어</p>
        </div>

        <div className="sci2-box" onClick={science} style={{ cursor: "pointer" }}>
          <img src={icon} className="sci2-icon" alt="icon" />
          <p className="sci2-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default HighScience2;
