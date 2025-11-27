import React from "react";
import "../styles/highsub2.css";
import { useNavigate } from "react-router-dom";
import high2earth from "../assets/earth.png";
import high2atom from "../assets/atom.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
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
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="highsub2-title">계열을 선택해주세요!</h1>

      <div className="highsub2-box-wrapper">

        <div className="highsub2-box" onClick={goSociety} style={{ cursor: "pointer" }}>
          <img src={high2earth} className="highsub2-icon" alt="" />
          <p className="highsub2-text">문과</p>
        </div>

        <div className="highsub2-box" onClick={goScience} style={{ cursor: "pointer" }}>
          <img src={high2atom} className="highsub2-icon" alt="" />
          <p className="highsub2-text">이과</p>
        </div>

      </div>
    </div>
  );
};

export default HighSub2;
