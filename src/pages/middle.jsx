import React from "react";
import "../styles//middle.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";  // ⬅ 저장 기능 추가

const Middle = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  // 학년 선택 시 저장 + 다음 페이지로 이동
  const selectGrade1 = () => {
    saveUserData("grade", "1");      // 중1 저장
    navigate("/middlesub");
  };

  const selectGrade2 = () => {
    saveUserData("grade", "2");      // 중2 저장
    navigate("/middlesub");
  };

  const selectGrade3 = () => {
    saveUserData("grade", "3");      // 중3 저장
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
        <div className="middle-box" onClick={selectGrade1} style={{ cursor: "pointer" }}>
          <img src={icon} className="middle-icon" alt="icon" />
          <p className="middle-text">1학년</p>
        </div>

        {/* 2학년 */}
        <div className="middle-box" onClick={selectGrade2} style={{ cursor: "pointer" }}>
          <img src={icon} className="middle-icon" alt="icon" />
          <p className="middle-text">2학년</p>
        </div>

        {/* 3학년 */}
        <div className="middle-box" onClick={selectGrade3} style={{ cursor: "pointer" }}>
          <img src={icon} className="middle-icon" alt="icon" />
          <p className="middle-text">3학년</p>
        </div>

      </div>
    </div>
  );
};

export default Middle;
