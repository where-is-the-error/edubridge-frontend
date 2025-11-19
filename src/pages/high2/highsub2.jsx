import React from "react";
import "./highsub2.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighSub2 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");
  const goSociety = () => navigate("/highsociety2");
  const goScience = () => navigate("/highscience2");

  return (
    <div className="highsub2-container">

      <div className="highsub2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <div className="highsub2-logo-dot"></div>
        <h1 className="highsub2-logo-text">EDU BRIDGE</h1>
      </div>

      <h1 className="highsub2-title">계열을 선택해주세요!</h1>

      <div className="highsub2-box-wrapper">

        <div className="highsub2-box" onClick={goSociety}>
          <img src={icon} className="highsub2-icon" alt="" />
          <p className="highsub2-text">문과</p>
        </div>

        <div className="highsub2-box" onClick={goScience}>
          <img src={icon} className="highsub2-icon" alt="" />
          <p className="highsub2-text">이과</p>
        </div>

      </div>
    </div>
  );
};

export default HighSub2;
