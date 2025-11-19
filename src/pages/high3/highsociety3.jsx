import React from "react";
import "./highsociety3.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighSociety3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  return (
    <div className="soc3-container">

      {/* 로고 */}
      <div
        className="soc3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="soc3-logo-dot"></div>
        <h1 className="soc3-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="soc3-title">과목을 선택해주세요!</h1>

      {/* 박스 */}
      <div className="soc3-box-wrapper">

        <div className="soc3-box"><img src={icon} className="soc3-icon" /><p className="soc3-text">국어</p></div>
        <div className="soc3-box"><img src={icon} className="soc3-icon" /><p className="soc3-text">수학</p></div>
        <div className="soc3-box"><img src={icon} className="soc3-icon" /><p className="soc3-text">영어</p></div>
        <div className="soc3-box"><img src={icon} className="soc3-icon" /><p className="soc3-text">사회</p></div>

      </div>
    </div>
  );
};

export default HighSociety3;
