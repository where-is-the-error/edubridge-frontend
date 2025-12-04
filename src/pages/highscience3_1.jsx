import React from "react";
import "../styles/highscience3_1.css";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "../utils/userStorage"
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const HighScience3_1 = () => {
  const navigate = useNavigate();

  // 로고 클릭 시 HomeAfter 페이지로 이동
  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  // 연령 선택 (저장 + 이동)
  const physics = () => {
    saveUserData("subject", "physics2");
    navigate("/mainpage");
  };

  const chemical = () => {
    saveUserData("subject", "chemical2");
    navigate("/mainpage");
  };

  const lifescience = () => {
    saveUserData("subject", "lifescience2");
    navigate("/mainpage");
  };

  const earthscience = () => {
    saveUserData("subject", "earthscience2");
    navigate("/mainpage");
  }

  return (
    <div className="sci3_1-container">

      {/* 로고 */}
      <div className="sci3_1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="sci3_1-title">과목을 선택해주세요!</h1>

      {/* 선택 박스 영역 */}
      <div className="sci3_1-box-wrapper">

        <div className="sci3_1-box" onClick={physics} style={{ cursor: "pointer" }}>
          <p className="sci3_1-text">
            물리  <span className="roman">II</span>
          </p>
        </div>

        <div className="sci3_1-box" onClick={chemical} style={{ cursor: "pointer" }}>
          <p className="sci3_1-text">
            화학 <span className="roman">II</span>
          </p>
        </div>

        <div className="sci3_1-box" onClick={lifescience} style={{ cursor: "pointer" }}>
          <p className="sci3_1-text">
            생명 <span className="roman">II</span>
          </p>
        </div>

        <div className="sci3_1-box" onClick={earthscience} style={{ cursor: "pointer" }}>
          <p className="sci3_1-text">
            지구 <span className="roman">II</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighScience3_1;
