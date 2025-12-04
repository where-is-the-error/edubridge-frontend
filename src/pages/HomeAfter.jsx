import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeAfter.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger2 from "../assets/tiger2.png";
// Login 컴포넌트 import 제거함

const HomeAfter = () => {
  const navigate = useNavigate();

  // 1. 페이지 로드 시 토큰 검사 (보안)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      // 토큰 없으면 로그인 페이지로 강제 이동
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);

  // 2. Continue 버튼 로직 (요청하신 조건 구현)
  const handleContinue = () => {
    // 로컬 스토리지에서 정보 확인 (백엔드 필드명에 맞게 키 확인 필요)
    // 예: age는 'gradeLevel'(초/중/고), grade는 'grade'(1,2,3학년) 라고 가정
    const userAgeGroup = localStorage.getItem("age"); // 또는 "gradeLevel"
    const userGrade = localStorage.getItem("grade");

    // 조건: 토큰은 이미 위에서 확인됨.
    // 나이와 학년 정보가 모두 있어야 메인으로 이동
    if (userAgeGroup && userGrade) {
      navigate("/mainpage"); 
    } else {
      // 하나라도 없으면 나이 선택 페이지부터 시작
      navigate("/age"); 
    }
  };

  // 3. 계정 변경하기 (로그아웃)
  const handleLogout = () => {
    localStorage.clear(); // 모든 정보 삭제
    navigate("/login");   // 로그인 페이지로 이동
  };

  return (
    <div className="after-container">
      <div className="after-logo">
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

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