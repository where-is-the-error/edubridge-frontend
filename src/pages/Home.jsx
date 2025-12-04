import React from "react";
import "../styles/Home.css";
import tiger from "../assets/tiger.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    // 1. 토큰 확인
    const token = localStorage.getItem("accessToken");

    if (token) {
      // 2. 토큰이 있으면: 로그인 후 대기 화면(HomeAfter)으로 이동
      navigate("/homeafter");
    } else {
      // 3. 토큰이 없으면: 로그인 페이지로 이동
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

        {/* onClick 핸들러 변경 */}
        <button className="home-button" onClick={handleStart}>
          Start!
        </button>

        <img src={tiger} className="home-tiger" alt="tiger" />
      </div>
    </div>
  );
};

export default Home;