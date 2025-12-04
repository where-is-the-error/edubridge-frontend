import React from "react";
import "../styles/morality3.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";   //  저장 기능 추가

const morality3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  //  과목 선택 시 저장 + mainpage 이동
  const m1 = () => {
    saveUserData("subject", "m1");
    navigate("/mainpage");
  };

  const m2 = () => {
    saveUserData("subject", "m2");
    navigate("/mainpage");
  };

  const m3 = () => {
    saveUserData("subject", "m3");
    navigate("/mainpage");
  };

  const m4 = () => {
    saveUserData("subject", "m4");
    navigate("/mainpage");
  };

  const m5 = () => {
    saveUserData("subject", "m5");
    navigate("/mainpage");
  }

  return (
    <div className="mor3-container">

      <div
        className="mor3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="mor3-title">과목을 선택해주세요!</h1>

      <div className="mor3-box-wrapper">

        <div className="mor3-box" onClick={m1} style={{ cursor: "pointer" }}>
          <p className="mor3-text">생활과<br />윤리</p>
        </div>

        <div className="mor3-box" onClick={m2} style={{ cursor: "pointer" }}>
          <p className="mor3-text">윤리와<br />사상</p>
        </div>

        <div className="mor3-box" onClick={m3} style={{ cursor: "pointer" }}>
          <p className="mor3-text">경제</p>
        </div>

        <div className="mor3-box" onClick={m4} style={{ cursor: "pointer" }}>
          <p className="mor3-text">정치와 법</p>
        </div>

        <div className="mor3-box" onClick={m5} style={{ cursor: "pointer"}}>
          <p className="mor3-text">사회・문화</p>
        </div>

      </div>
    </div>
  );
};

export default morality3;
