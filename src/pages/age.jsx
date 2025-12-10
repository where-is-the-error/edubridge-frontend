import React from "react";
import "../styles/age.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png"; // 아이콘 이미지
import { saveUserData } from "../utils/userStorage";
import middle from "../assets/agemiddle.png";
import high from "../assets/agehigh.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const Age = () => {
  const navigate = useNavigate();

  // 로고 클릭 시 HomeAfter 페이지로 이동
  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  // 연령 선택 (저장 + 이동)
  const goElegrade = () => {
    saveUserData("age", "elementary");  // 저장
    navigate("/elegrade");
  };

  const goMiddle = () => {
    saveUserData("age", "middle");
    navigate("/middle");
  };

  const goHigh = () => {
    saveUserData("age", "high");
    navigate("/high");
  };

  return (
    <div className="age-container">

      {/* 로고 */}
      <div className="age-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="age-title">나이를 선택해주세요!</h1>

      {/* 선택 박스 영역 */}
      <div className="age-box-wrapper">

        {/* 초등학생 */}
        <div className="age-box" onClick={goElegrade} style={{ cursor: "pointer" }}>
          <img src={icon} className="age-icon" alt="student" />
          <p className="age-text">초등학생</p>
        </div>

        {/* 중학생 */}
        <div className="age-box" onClick={goMiddle} style={{ cursor: "pointer" }}>
          <img src={middle} className="age-middle" alt="student" />
          <p className="age-text">중학생</p>
        </div>

        {/* 고등학생 */}
        <div className="age-box" onClick={goHigh} style={{ cursor: "pointer" }}>
          <img src={high} className="age-high" alt="student" />
          <p className="age-text">고등학생</p>
        </div>
      </div>
    </div>
  );
};

export default Age;
