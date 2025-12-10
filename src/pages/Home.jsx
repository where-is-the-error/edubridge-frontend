import React from "react";
import "../styles/Home.css";
import tiger from "../assets/tiger.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/homeafter");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-logo">
          <img src={logo} alt="EduBridge Logo" className="logo" />
          <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
        </div>

        <h2 className="home-title">학습중개사이트</h2>
        <p className="home-subtitle">지금 이곳에서 새로운 배움을 이어보세요</p>

        <button className="home-button" onClick={handleStart}>
          Start!
        </button>

        <img src={tiger} className="home-tiger" alt="tiger" />
      </div>
    </div>
  );
};

export default Home;