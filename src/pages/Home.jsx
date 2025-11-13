import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import tiger from "../assets/tiger.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* 로고 */}
      <div className="logo">
        <div className="logo-dot"></div>
        <h1 className="logo-text">EDU BRIDGE</h1>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="content">
        <div className="text-area">
          <h2 className="title">학습중개사이트</h2>
          <p className="subtitle">지금 이곳에서 새로운 배움을 이어보세요</p>
          <button
            className="btn-start"
            onClick={() => navigate("/login")} // 로그인 페이지로 이동
          >
            Start!
          </button>
        </div>
    </div>

    {/* 호랑이 이미지 */}
    <img src={tiger} alt="tiger" className="tiger" />
    </div>
  );
};

export default Home;
