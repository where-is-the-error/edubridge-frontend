import React from "react";
import "../styles/highsub3.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const HighSub3 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  // ⬇ 계열 선택 시 저장 + 이동
  const goSociety = () => {
    saveUserData("track", "society");   // 문과 저장
    navigate("/highsociety3");          // 문과 과목 선택 페이지
  };

  const goScience = () => {
    saveUserData("track", "science");   // 이과 저장
    navigate("/highscience3");          // 이과 과목 선택 페이지
  };

  return (
    <div className="highsub3-container">

      {/* 로고 */}
      <div
        className="highsub3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="highsub3-logo-dot"></div>
        <h1 className="highsub3-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="highsub3-title">계열을 선택해주세요!</h1>

      {/* 선택 박스 */}
      <div className="highsub3-box-wrapper">

        <div
          className="highsub3-box"
          onClick={goSociety}
          style={{ cursor: "pointer" }}
        >
          <img src={icon} className="highsub3-icon" alt="icon" />
          <p className="highsub3-text">문과</p>
        </div>

        <div
          className="highsub3-box"
          onClick={goScience}
          style={{ cursor: "pointer" }}
        >
          <img src={icon} className="highsub3-icon" alt="icon" />
          <p className="highsub3-text">이과</p>
        </div>

      </div>
    </div>
  );
};

export default HighSub3;
