import React from "react";
import "../styles/highscience3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";   // ⬅ 저장 기능 추가

const HighScience3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // 과목 선택 시 저장 + mainpage 이동
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

  const history =() => {
    saveUserData("subject", "history");
    navigate("/mainpage");
  }

  const science = () => {
    navigate("/highscience3_1");
  };

  return (
    <div className="sci3-container">

      {/* 로고 */}
      <div
        className="sci3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="sci3-title">과목을 선택해주세요!</h1>

      {/* 박스 */}
      <div className="sci3-box-wrapper">

        <div
          className="sci3-box"
          onClick={korea}
          style={{ cursor: "pointer" }}
        >
          <p className="sci3-text">국어</p>
        </div>

        <div
          className="sci3-box"
          onClick={math}
          style={{ cursor: "pointer" }}
        >
          <p className="sci3-text">수학</p>
        </div>

        <div
          className="sci3-box"
          onClick={english}
          style={{ cursor: "pointer" }}
        >
          <p className="sci3-text">영어</p>
        </div>

        <div
          className="sci3-box"
          onClick={history}
          style={{ cursor: "pointer" }}
        >
          <p className="sci3-text">한국사</p>
        </div>

        <div
          className="sci3-box"
          onClick={science}
          style={{ cursor: "pointer" }}
        >
          <p className="sci3-text">자연・과학</p>
        </div>

      </div>
    </div>
  );
};

export default HighScience3;
