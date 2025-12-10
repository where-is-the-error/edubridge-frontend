import React from "react";
import "../styles/ele.css";
import { useNavigate } from "react-router-dom";
import koreanimg from "../assets/korean.png";
import mathimg from "../assets/math.png";
import englishimg from "../assets/english.png";
import societyimg from "../assets/society.png";
import scienceimg from "../assets/science.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const Ele = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const onSelect = (subject) => handleSelection("subject", subject, navigate, "/mainpage");

  return (
    <div className="ele-container">
      <div className="ele-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="ele-title">과목을 선택해주세요!</h1>

      <div className="ele-box-wrapper">
        <div className="ele-box" onClick={() => onSelect("korea")}>
          <img src={koreanimg} className="ele-korean" alt="국어" />
          <p className="ele-text">국어</p>
        </div>
        <div className="ele-box" onClick={() => onSelect("math")}>
          <img src={mathimg} className="ele-math" alt="수학" />
          <p className="ele-text">수학</p>
        </div>
        <div className="ele-box" onClick={() => onSelect("english")}>
          <img src={englishimg} className="ele-english" alt="영어" />
          <p className="ele-text">영어</p>
        </div>
        <div className="ele-box" onClick={() => onSelect("social")}>
          <img src={societyimg} className="ele-society" alt="사회" />
          <p className="ele-text">사회</p>
        </div>
        <div className="ele-box" onClick={() => onSelect("science")}>
          <img src={scienceimg} className="ele-science" alt="과학" />
          <p className="ele-text">과학</p>
        </div>
      </div>
    </div>
  );
};

export default Ele;