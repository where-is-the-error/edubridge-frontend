// src/components/HomeAfter.jsx (또는 src/pages/homeafter.jsx)

import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login"; // 👈 Login 컴포넌트 import (경로 확인 필수)
import "../styles/HomeAfter.css";
import tiger2 from "../assets/tiger2.png";

const HomeAfter = () => {
  const navigate = useNavigate();

  // 🔑 로그인 상태 확인
  const accessToken = localStorage.getItem("accessToken");
  const isLoggedIn = !!accessToken;

  // 🚨 로그인 상태가 아니면 Login 컴포넌트를 반환하여 화면에 바로 표시
  if (!isLoggedIn) {
    // Login 컴포넌트를 반환하여 HomeAfter의 UI 대신 로그인 폼이 표시되도록 함
    return <Login />;
  }

  // 🚨 로그인 되어 있을 때 실행될 로직과 UI (원래의 HomeAfter 기능)
  const gradeLevel = localStorage.getItem("gradeLevel");

  // "Continue!" 버튼 클릭 처리 함수
  const handleContinue = () => {
    // 1-1. 학년 정보(gradeLevel)가 이미 있는 경우
    if (gradeLevel) {
      navigate("/mainpage"); // 🔑 메인 페이지로 이동
    } else {
      // 1-2. 학년 정보가 없는 경우
      navigate("/age"); // 💡 연령 선택 페이지로 이동
    }
  };

  // 로그아웃 (계정 변경하기) 처리
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("gradeLevel");
    navigate("/"); // 토큰 삭제 후 홈 경로로 이동 (HomeAfter가 재렌더링되며 Login 컴포넌트 표시)
  };

  // 3단계: 로그인되어 있을 때 보여줄 UI
  return (
    <div className="after-container">
      {/* 로고 */}
      <div className="after-logo">
        <div className="after-logo-dot"></div>
        <h1 className="after-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="after-content">
        <div className="after-text-area">
          <h2 className="after-title">학습중개사이트</h2>
          <div className="after-btn-group">
            <button
              className="after-btn-continue"
              onClick={handleContinue}
            >
              Continue!
            </button>
            <button
              className="after-btn-change"
              onClick={handleLogout}>
              계정 변경하기
            </button>
          </div>
        </div>
        <img src={tiger2} alt="tiger2" className="after-tiger" />
      </div>
    </div>
  );
};

export default HomeAfter;