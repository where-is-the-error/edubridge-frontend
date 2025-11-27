import React from "react";
import "../styles/high.css";
import { useNavigate } from "react-router-dom";
import highimg from "../assets/agehigh.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const High = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  // 1학년 선택
  const goHighGrade1 = () => {
    saveUserData("grade", "1");      // 학년 저장
    navigate("/highgrade1");         // 다음 페이지 이동
  };

  // 2학년 선택
  const goHighSub2 = () => {
    saveUserData("grade", "2");
    navigate("/highsub2");
  };

  // 3학년 선택
  const goHighSub3 = () => {
    saveUserData("grade", "3");
    navigate("/highsub3");
  };

  return (
    <div className="high-container">

      {/* 로고 */}
      <div
        className="high-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="high-title">학년을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="high-box-wrapper">

        {/* 1학년 */}
        <div className="high-box" onClick={goHighGrade1} style={{ cursor: "pointer" }}>
          <img src={highimg} className="high-icon" alt="icon" />
          <p className="high-text">1학년</p>
        </div>

        {/* 2학년 */}
        <div className="high-box" onClick={goHighSub2} style={{ cursor: "pointer" }}>
          <img src={highimg} className="high-icon" alt="icon" />
          <p className="high-text">2학년</p>
        </div>

        {/* 3학년 */}
        <div className="high-box" onClick={goHighSub3} style={{ cursor: "pointer" }}>
          <img src={highimg} className="high-icon" alt="icon" />
          <p className="high-text">3학년</p>
        </div>

      </div>
    </div>
  );
};

export default High;
