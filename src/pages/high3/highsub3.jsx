import React from "react";
import "./highsub3.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighSub3 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");
  const goSociety = () => navigate("/highsociety3");
  const goScience = () => navigate("/highscience3");

  return (
    <div className="highsub3-container">

      {/* 로고 */}
      <div
        className="highsub3-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="highsub3-logo-dot"></div>
        <h1 className="highsub3-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="highsub3-title">계열을 선택해주세요!</h1>

      {/* 선택 박스 */}
      <div className="highsub3-box-wrapper">

        <div className="highsub3-box" onClick={goSociety}>
          <img src={icon} className="highsub3-icon" />
          <p className="highsub3-text">문과</p>
        </div>

        <div className="highsub3-box" onClick={goScience}>
          <img src={icon} className="highsub3-icon" />
          <p className="highsub3-text">이과</p>
        </div>

      </div>
    </div>
  );
};

export default HighSub3;
