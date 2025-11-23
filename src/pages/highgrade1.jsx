import React from "react";
import "../styles/highgrade1.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";

const HighGrade1 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

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

  const science = () => {
    saveUserData("subject", "science");
    navigate("/highscience1");
  };

  const history = () => {
    saveUserData("subject", "history");
    navigate("/mainpage");
  };

  return (
    <div className="highgrade1-container">
      {/* 로고 */}
      <div
        className="highgrade1-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="highgrade1-logo-dot"></div>
        <h1 className="highgrade1-logo-text">EduBridge</h1>
      </div>

      {/* 제목 */}
      <h1 className="highgrade1-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="highgrade1-box-wrapper">

        <div className="highgrade1-box" onClick={korea}>
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">국어</p>
        </div>

        <div className="highgrade1-box" onClick={math}>
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">수학</p>
        </div>

        <div className="highgrade1-box" onClick={english}>
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">영어</p>
        </div>

        <div className="highgrade1-box" onClick={social}>
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">사회</p>
        </div>

        <div className="highgrade1-box" onClick={science}>
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">과학</p>
        </div>

        <div className="highgrade1-box" onClick={history}>
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">한국사</p>
        </div>
      </div>
    </div>
  );
};

export default HighGrade1;
