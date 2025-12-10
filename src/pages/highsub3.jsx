import React from "react";
import "../styles/highsub3.css";
import { useNavigate } from "react-router-dom";
import high3atom from "../assets/atom.png";
import high3earth from "../assets/earth.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighSub3 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const goSociety = () => handleSelection("track", "society", navigate, "/highsociety3");
  const goScience = () => handleSelection("track", "science", navigate, "/highscience3");

  return (
    <div className="highsub3-container">
      <div className="highsub3-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="highsub3-title">계열을 선택해주세요!</h1>

      <div className="highsub3-box-wrapper">
        <div className="highsub3-box" onClick={goSociety} style={{ cursor: "pointer" }}>
          <img src={high3earth} className="highsub3-icon" alt="icon" />
          <p className="highsub3-text">문과</p>
        </div>
        <div className="highsub3-box" onClick={goScience} style={{ cursor: "pointer" }}>
          <img src={high3atom} className="highsub3-icon" alt="icon" />
          <p className="highsub3-text">이과</p>
        </div>
      </div>
    </div>
  );
};

export default HighSub3;