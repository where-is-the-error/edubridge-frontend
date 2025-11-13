import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAfter.css";
import tiger2 from "../assets/tiger2.png";

const HomeAfter = () => {
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

          <div className="btn-group">
            <button
              className="btn-continue"
              onClick={() => navigate("/dashboard")} // 예시: 학습화면으로 이동
            >
              Continue!
            </button>

            <button
              className="btn-change"
              onClick={() => navigate("/")} // 계정 변경 → 처음 화면(Home)
            >
              계정 변경하기
            </button>
          </div>
        </div>

        {/* 호랑이 이미지 (변경된 tiger2) */}
        <img src={tiger2} alt="tiger2" className="tiger" />
      </div>
    </div>
  );
};

export default HomeAfter;
