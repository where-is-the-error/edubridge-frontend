import React from "react";
import "../styles/geography.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";

const geography = () => {
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
    <div className="geo-container">

      {/* 로고 */}
      <div className="geo-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="geo-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="geo-box-wrapper">

        <div className="geo-box" onClick={kgeography}>
          <p className="geo-text">한국지리</p>
        </div>

        <div className="geo-box" onClick={wgeography}>
          <p className="geo-text">세계지리</p>
        </div>

      </div>
    </div>
  );
};

export default geography;
