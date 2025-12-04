import React from "react";
import "../styles/Home.css";
import tiger from "../assets/tiger.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* 캔버스 전체 영역 */}
      <div className="home-content">

        {/* 濡쒓퀬 */}
        <div className="home-logo">
          <img src={logo} alt="EduBridge Logo" className="logo" />
          <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
        </div>

        {/* 텍스트 */}
        <h2 className="home-title">학습중개사이트</h2>
        <p className="home-subtitle">지금 이곳에서 새로운 배움을 이어보세요</p>

        {/* 버튼 */}
        <button className="home-button" onClick={() => navigate("/HomeAfter")}>
          Start!
        </button>

        {/* 호랑이 이미지 */}
        <img src={tiger} className="home-tiger" alt="tiger" />

      </div>
    </div>
  );
};

export default Home;
