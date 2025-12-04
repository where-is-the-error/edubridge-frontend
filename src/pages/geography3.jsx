import React from "react";
import "../styles/geography3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";

const geography3 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  const kgeography = () => {
    saveUserData("subject", "koreageography");
    navigate("/mainpage");
  };

  const wgeography = () => {
    saveUserData("subject", "worldgeography");
    navigate("/mainpage");
  };

  return (
    <div className="geo3-container">

      {/* 로고 */}
      <div className="geo3-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="geo3-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="geo3-box-wrapper">

        <div className="geo3-box" onClick={kgeography}>
          <p className="geo3-text">한국지리</p>
        </div>

        <div className="geo3-box" onClick={wgeography}>
          <p className="geo3-text">세계지리</p>
        </div>

      </div>
    </div>
  );
};

export default geography3;
