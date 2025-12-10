import React from "react";
import "../styles/highsub2.css";
import { useNavigate } from "react-router-dom";
import high2earth from "../assets/earth.png";
import high2atom from "../assets/atom.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { handleSelection } from "../utils/selectionHandler";

const HighSub2 = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const goSociety = () => handleSelection("track", "society", navigate, "/highsociety2");
  const goScience = () => handleSelection("track", "science", navigate, "/highscience2");

  return (
    <div className="highsub2-container">
      <div className="highsub2-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="highsub2-title">계열을 선택해주세요!</h1>

      <div className="highsub2-box-wrapper">
        <div className="highsub2-box" onClick={goSociety} style={{ cursor: "pointer" }}>
          <img src={high2earth} className="highsub2-icon" alt="" />
          <p className="highsub2-text">문과</p>
        </div>
        <div className="highsub2-box" onClick={goScience} style={{ cursor: "pointer" }}>
          <img src={high2atom} className="highsub2-icon" alt="" />
          <p className="highsub2-text">이과</p>
        </div>
      </div>
    </div>
  );
};

export default HighSub2;