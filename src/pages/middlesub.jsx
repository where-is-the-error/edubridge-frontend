import React from "react";
import "../styles/middlesub.css";
import { useNavigate } from "react-router-dom";
import koreanimg from "../assets/korean.png";
import mathimg from "../assets/math.png";
import englishimg from "../assets/english.png";
import societyimg from "../assets/society.png";
import scienceimg from "../assets/science.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const MiddleSub = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const onSelect = (subject) => handleSelection("subject", subject, navigate, "/mainpage");

  return (
    <div className="middlesub-container">
      <div className="middlesub-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="middlesub-title">과목을 선택해주세요!</h1>

      <div className="middlesub-box-wrapper">
        <div className="middlesub-box" onClick={() => onSelect("korea")}>
          <img src={koreanimg} className="middlesub-korean" alt="icon" />
          <p className="middlesub-text">국어</p>
        </div>
        <div className="middlesub-box" onClick={() => onSelect("math")}>
          <img src={mathimg} className="middlesub-math" alt="icon" />
          <p className="middlesub-text">수학</p>
        </div>
        <div className="middlesub-box" onClick={() => onSelect("english")}>
          <img src={englishimg} className="middlesub-english" alt="icon" />
          <p className="middlesub-text">영어</p>
        </div>
        <div className="middlesub-box" onClick={() => onSelect("social")}>
          <img src={societyimg} className="middlesub-society" alt="icon" />
          <p className="middlesub-text">사회</p>
        </div>
        <div className="middlesub-box" onClick={() => onSelect("science")}>
          <img src={scienceimg} className="middlesub-science" alt="icon" />
          <p className="middlesub-text">과학</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSub;