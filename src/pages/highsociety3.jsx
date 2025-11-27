import React from "react";
import "../styles/highsociety3.css";
import { useNavigate } from "react-router-dom";
import koreanimg from "../assets/korean.png";
import mathimg from "../assets/math.png";
import englishimg from "../assets/english.png";
import societyimg from "../assets/society.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
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
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
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
          <img src={koreanimg} className="soc3-korean" alt="icon" />
          <p className="soc3-text">국어</p>
        </div>

        <div
          className="soc3-box"
          onClick={math}
          style={{ cursor: "pointer" }}
        >
          <img src={mathimg} className="soc3-math" alt="icon" />
          <p className="soc3-text">수학</p>
        </div>

        <div
          className="soc3-box"
          onClick={english}
          style={{ cursor: "pointer" }}
        >
          <img src={englishimg} className="soc3-english" alt="icon" />
          <p className="soc3-text">영어</p>
        </div>

        <div
          className="soc3-box"
          onClick={social}
          style={{ cursor: "pointer" }}
        >
          <img src={societyimg} className="soc3-society" alt="icon" />
          <p className="soc3-text">사회</p>
        </div>

      </div>
    </div>
  );
};

export default HighSociety3;
