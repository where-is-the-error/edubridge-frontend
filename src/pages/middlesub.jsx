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
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const MiddleSub = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  // ⬇ 과목 선택 시 저장 + 이동
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
    navigate("/mainpage");
  };

  return (
    <div className="middlesub-container">

      {/* 로고 */}
      <div
        className="middlesub-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="middlesub-title">과목을 선택해주세요!</h1>

      {/* 선택 박스 */}
      <div className="middlesub-box-wrapper">

        <div className="middlesub-box" onClick={korea} style={{ cursor: "pointer" }}>
          <img src={koreanimg} className="middlesub-korean" alt="icon" />
          <p className="middlesub-text">국어</p>
        </div>

        <div className="middlesub-box" onClick={math} style={{ cursor: "pointer" }}>
          <img src={mathimg} className="middlesub-math" alt="icon" />
          <p className="middlesub-text">수학</p>
        </div>

        <div className="middlesub-box" onClick={english} style={{ cursor: "pointer" }}>
          <img src={englishimg} className="middlesub-english" alt="icon" />
          <p className="middlesub-text">영어</p>
        </div>

        <div className="middlesub-box" onClick={social} style={{ cursor: "pointer" }}>
          <img src={societyimg} className="middlesub-society" alt="icon" />
          <p className="middlesub-text">사회</p>
        </div>

        <div className="middlesub-box" onClick={science} style={{ cursor: "pointer" }}>
          <img src={scienceimg} className="middlesub-science" alt="icon" />
          <p className="middlesub-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default MiddleSub;
