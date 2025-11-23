import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeAfter.css";
import tiger2 from "../assets/tiger2.png";

const HomeAfter = () => {
  const navigate = useNavigate();

  // 🔥 계정 변경하기 기능 추가
  const handleChangeAccount = () => {
    const confirmReset = window.confirm(
      "정말 계정을 변경하시겠습니까?\n기존 선택 데이터가 모두 초기화됩니다."
    );

    if (confirmReset) {
      localStorage.clear();   // 🔥 모든 저장정보 초기화
      navigate("/");          // 🔥 로그인(or 홈) 페이지로 이동
    }
  };

  return (
    <div className="after-container">

      {/* 로고 */}
      <div className="after-logo">
        <div className="after-logo-dot"></div>
        <h1 className="after-logo-text">EduBridge</h1>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="after-content">

        <div className="after-text-area">
          <h2 className="after-title">학습중개사이트</h2>

          <div className="after-btn-group">
            {/* 계속하기 */}
            <button
              className="after-btn-continue"
              onClick={() => navigate("/dashboard")}
            >
              Continue!
            </button>

            {/* 계정 변경하기 (확인창 + 초기화) */}
            <button
              className="after-btn-change"
              onClick={handleChangeAccount}
            >
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
