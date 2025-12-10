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
import { handleSelection } from "../utils/selectionHandler";

const HighGrade1 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // 공통 이동 함수
  const toMain = (subj) => handleSelection("subject", subj, navigate, "/mainpage");

  return (
    <div className="highgrade1-container">
      <div className="highgrade1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="highgrade1-title">과목을 선택해주세요!</h1>

      <div className="highgrade1-box-wrapper">
        <div className="highgrade1-box" onClick={() => toMain("korea")}>
          <img src={koreanimg} className="highgrade1-korean" alt="icon" />
          <p className="highgrade1-text">국어</p>
        </div>
        <div className="highgrade1-box" onClick={() => toMain("math")}>
          <img src={mathimg} className="highgrade1-math" alt="icon" />
          <p className="highgrade1-text">수학</p>
        </div>
        <div className="highgrade1-box" onClick={() => toMain("english")}>
          <img src={englishimg} className="highgrade1-english" alt="icon" />
          <p className="highgrade1-text">영어</p>
        </div>
        <div className="highgrade1-box" onClick={() => toMain("social")}>
          <img src={societyimg} className="highgrade1-society" alt="icon" />
          <p className="highgrade1-text">사회</p>
        </div>
        {/* 고1 과학은 세부 선택 페이지로 이동 */}
        <div className="highgrade1-box" onClick={() => handleSelection("subject", "science", navigate, "/highscience1")}>
          <img src={scienceimg} className="highgrade1-science" alt="icon" />
          <p className="highgrade1-text">과학</p>
        </div>
        <div className="highgrade1-box" onClick={() => toMain("history")}>
          <img src={historyimg} className="highgrade1-history" alt="icon" />
          <p className="highgrade1-text">한국사</p>
        </div>
      </div>
    </div>
  );
};

export default HighGrade1;