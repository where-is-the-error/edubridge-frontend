import React from "react";
import "../styles/highgrade1.css";
import { useNavigate } from "react-router-dom";
import koreanimg from "../assets/korean.png";
import mathimg from "../assets/math.png";
import englishimg from "../assets/english.png";
import societyimg from "../assets/society.png";
import scienceimg from "../assets/science.png";
import historyimg from "../assets/history.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
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
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="highgrade1-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="highgrade1-box-wrapper">

        <div className="highgrade1-box" onClick={korea}>
          <img src={koreanimg} className="highgrade1-korean" alt="icon" />
          <p className="highgrade1-text">국어</p>
        </div>

        <div className="highgrade1-box" onClick={math}>
          <img src={mathimg} className="highgrade1-math" alt="icon" />
          <p className="highgrade1-text">수학</p>
        </div>

        <div className="highgrade1-box" onClick={english}>
          <img src={englishimg} className="highgrade1-english" alt="icon" />
          <p className="highgrade1-text">영어</p>
        </div>

        <div className="highgrade1-box" onClick={social}>
          <img src={societyimg} className="highgrade1-society" alt="icon" />
          <p className="highgrade1-text">사회</p>
        </div>

        <div className="highgrade1-box" onClick={science}>
          <img src={scienceimg} className="highgrade1-science" alt="icon" />
          <p className="highgrade1-text">과학</p>
        </div>

        <div className="highgrade1-box" onClick={history}>
          <img src={historyimg} className="highgrade1-history" alt="icon" />
          <p className="highgrade1-text">한국사</p>
        </div>
      </div>
    </div>
  );
};

export default HighGrade1;
