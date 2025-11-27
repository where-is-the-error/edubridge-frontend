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
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const Ele = () => {
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
    <div className="ele-container">

      {/* 로고 */}
      <div
        className="ele-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="ele-title">과목을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="ele-box-wrapper">

        <div className="ele-box" onClick={korea} style={{ cursor: "pointer" }}>
          <img src={koreanimg} className="ele-korean" alt="icon" />
          <p className="ele-text">국어</p>
        </div>

        <div className="ele-box" onClick={math} style={{ cursor: "pointer" }}>
          <img src={mathimg} className="ele-math" alt="icon" />
          <p className="ele-text">수학</p>
        </div>

        <div className="ele-box" onClick={english} style={{ cursor: "pointer" }}>
          <img src={englishimg} className="ele-english" alt="icon" />
          <p className="ele-text">영어</p>
        </div>

        <div className="ele-box" onClick={social} style={{ cursor: "pointer" }}>
          <img src={societyimg} className="ele-society" alt="icon" />
          <p className="ele-text">사회</p>
        </div>

        <div className="ele-box" onClick={science} style={{ cursor: "pointer" }}>
          <img src={scienceimg} className="ele-science" alt="icon" />
          <p className="ele-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default Ele;
