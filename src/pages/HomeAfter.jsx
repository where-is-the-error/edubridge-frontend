import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeAfter.css";
import tiger2 from "../assets/tiger2.png";

const HomeAfter = () => {
  const navigate = useNavigate();

  // "Continue!" 버튼 클릭 처리 함수
  const handleContinue = () => {
    const accessToken = localStorage.getItem("accessToken");
    // 💡 학년 정보(gradeLevel)를 localStorage에서 가져옵니다.
    const gradeLevel = localStorage.getItem("gradeLevel");

    // 1. 로그인이 되어 있는 경우 (accessToken이 있음)
    if (accessToken) {

      // 1-1. 학년 정보(gradeLevel)가 이미 있는 경우
      if (gradeLevel) {
        navigate("/mainpage"); // 🔑 메인 페이지로 이동
      } else {
        // 1-2. 학년 정보가 없는 경우
        navigate("/age"); // 💡 연령 선택 페이지로 이동
      }

    } else {
      // 2. 로그인이 안 되어 있는 경우 (accessToken이 없음)
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate("/login"); // 🚨 로그인 페이지로 이동
    }
  };

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
              // 🌟 수정된 부분: handleContinue 함수 연결
              onClick={handleContinue}
            >
              Continue!
            </button>
            <button
              className="after-btn-change"
              // 계정 변경 버튼은 기존대로 /login으로 이동 (추가로 토큰 삭제 로직을 넣을 수 있습니다)
              onClick={() => navigate("/login")}>
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