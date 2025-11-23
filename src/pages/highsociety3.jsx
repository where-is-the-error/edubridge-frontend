import React from "react";
import "../styles/highsociety3.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const HighSociety3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // ⬇ 과목 선택 시 저장 + mainpage 이동
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

  const social = () => {
    saveUserData("subject", "social");
    navigate("/mainpage");
  };

  return (
    <div className="soc3-container">

      {/* 로고 */}
      <div
        className="soc3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="soc3-logo-dot"></div>
        <h1 className="soc3-logo-text">EduBridge</h1>
      </div>

      {/* 제목 */}
      <h1 className="soc3-title">과목을 선택해주세요!</h1>

      {/* 박스 */}
      <div className="soc3-box-wrapper">

        <div
          className="soc3-box"
          onClick={korea}
          style={{ cursor: "pointer" }}
        >
          <img src={icon} className="soc3-icon" alt="icon" />
          <p className="soc3-text">국어</p>
        </div>

        <div
          className="soc3-box"
          onClick={math}
          style={{ cursor: "pointer" }}
        >
          <img src={icon} className="soc3-icon" alt="icon" />
          <p className="soc3-text">수학</p>
        </div>

        <div
          className="soc3-box"
          onClick={english}
          style={{ cursor: "pointer" }}
        >
          <img src={icon} className="soc3-icon" alt="icon" />
          <p className="soc3-text">영어</p>
        </div>

        <div
          className="soc3-box"
          onClick={social}
          style={{ cursor: "pointer" }}
        >
          <img src={icon} className="soc3-icon" alt="icon" />
          <p className="soc3-text">사회</p>
        </div>

      </div>
    </div>
  );
};

export default HighSociety3;
