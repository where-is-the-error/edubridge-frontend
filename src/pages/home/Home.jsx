import React from "react";
import "./Home.css";
import tiger from "../../assets/tiger.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* 캔버스 전체 영역 */}
      <div className="home-content">

        {/* 로고 */}
        <div className="home-logo">
          <div className="home-logo-dot"></div>
          <h1 className="home-logo-text">EDU BRIDGE</h1>
        </div>

        {/* 텍스트 */}
        <h2 className="home-title">학습중개사이트</h2>
        <p className="home-subtitle">지금 이곳에서 새로운 배움을 이어보세요</p>

        {/* 버튼 */}
        <button className="home-button" onClick={() => navigate("/login")}>
          Start!
        </button>

        {/* 호랑이 이미지 */}
        <img src={tiger} className="home-tiger" alt="tiger" />

      </div>
    </div>
  );
};

export default Home;
