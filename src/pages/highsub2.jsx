import React from "react";
import "../styles/highsub2.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const HighSub2 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  // ⬇ 계열 선택 시 저장 + 이동
  const goSociety = () => {
    saveUserData("track", "society");   // 문과 저장
    navigate("/highsociety2");          // 문과 과목 선택 페이지로 이동
  };

  const goScience = () => {
    saveUserData("track", "science");   // 이과 저장
    navigate("/highscience2");          // 이과 과목 선택 페이지로 이동
  };

  return (
    <div className="highsub2-container">

      <div
        className="highsub2-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="highsub2-logo-dot"></div>
        <h1 className="highsub2-logo-text">EDU BRIDGE</h1>
      </div>

      <h1 className="highsub2-title">계열을 선택해주세요!</h1>

      <div className="highsub2-box-wrapper">

        <div className="highsub2-box" onClick={goSociety} style={{ cursor: "pointer" }}>
          <img src={icon} className="highsub2-icon" alt="" />
          <p className="highsub2-text">문과</p>
        </div>

        <div className="highsub2-box" onClick={goScience} style={{ cursor: "pointer" }}>
          <img src={icon} className="highsub2-icon" alt="" />
          <p className="highsub2-text">이과</p>
        </div>

      </div>
    </div>
  );
};

export default HighSub2;
