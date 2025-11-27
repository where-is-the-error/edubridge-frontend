import React from "react";
import "../styles/history2.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";

const history2 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  const world = () => {
    saveUserData("subject", "world");
    navigate("/mainpage");
  };

  const east = () => {
    saveUserData("subject", "east");
    navigate("/mainpage");
  };

  return (
    <div className="hi2-container">

      {/* 로고 */}
      <div className="hi2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="hi2-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="hi2-box-wrapper">

        <div className="hi2-box" onClick={world}>
          <p className="hi2-text">세계사</p>
        </div>

        <div className="hi2-box" onClick={east}>
          <p className="hi2-text">동아시아사</p>
        </div>

      </div>
    </div>
  );
};

export default history2;
