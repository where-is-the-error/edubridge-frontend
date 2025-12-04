import React from "react";
import "../styles/highsociety2.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";   //  저장 기능 추가

const HighSociety2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  //  과목 선택 시 저장 + mainpage 이동
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

  const history = () => {
    saveUserData("subject", "history");
    navigate("/mainpage");
  };

  const highsociety2_1 = () => {
    navigate("/highsociety2_1")
  }

  return (
    <div className="soc2-container">

      <div
        className="soc2-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="soc2-title">과목을 선택해주세요!</h1>

      <div className="soc2-box-wrapper">

        <div className="soc2-box" onClick={korea} style={{ cursor: "pointer" }}>
          <p className="soc2-text">국어</p>
        </div>

        <div className="soc2-box" onClick={math} style={{ cursor: "pointer" }}>
          <p className="soc2-text">수학</p>
        </div>

        <div className="soc2-box" onClick={english} style={{ cursor: "pointer" }}>
          <p className="soc2-text">영어</p>
        </div>

        <div className="soc2-box" onClick={history} style={{ cursor: "pointer" }}>
          <p className="soc2-text">한국사</p>
        </div>

        <div className="soc2-box" onClick={highsociety2_1} style={{ cursor: "pointer"}}>
          <p className="soc2-text">인문・사회</p>
        </div>

      </div>
    </div>
  );
};

export default HighSociety2;
