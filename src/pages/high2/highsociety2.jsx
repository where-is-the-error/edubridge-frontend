import React from "react";
import "./highsociety2.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighSociety2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  return (
    <div className="soc2-container">

      <div className="soc2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <div className="soc2-logo-dot"></div>
        <h1 className="soc2-logo-text">EDU BRIDGE</h1>
      </div>

      <h1 className="soc2-title">과목을 선택해주세요!</h1>

      <div className="soc2-box-wrapper">

        <div className="soc2-box"><img src={icon} className="soc2-icon" /><p className="soc2-text">국어</p></div>
        <div className="soc2-box"><img src={icon} className="soc2-icon" /><p className="soc2-text">수학</p></div>
        <div className="soc2-box"><img src={icon} className="soc2-icon" /><p className="soc2-text">영어</p></div>
        <div className="soc2-box"><img src={icon} className="soc2-icon" /><p className="soc2-text">사회</p></div>

      </div>
    </div>
  );
};

export default HighSociety2;
