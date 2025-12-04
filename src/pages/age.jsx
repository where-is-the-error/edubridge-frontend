import React from "react";
import "../styles/age.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png"; 
import middle from "../assets/agemiddle.png";
import high from "../assets/agehigh.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
// utils import 확인 필요 (경로가 맞는지 확인하세요)
import { saveUserData } from "../utils/userStorage"; 
import { updateUserInfo } from "../utils/api"; 

const Age = () => {
  const navigate = useNavigate();

  // 헬퍼 함수: DB 저장 및 로컬 저장 후 이동
  const handleSelection = async (ageGroup, nextPath) => {
    // 1. DB 업데이트 시도
    const updatePayload = { gradeLevel: ageGroup };
    
    // API 호출 (실패해도 로컬 저장은 진행하도록 try-catch 권장)
    try {
      await updateUserInfo(updatePayload, "/api/user/info");
    } catch (error) {
      console.error("DB 업데이트 실패 (로컬 저장은 진행됨):", error);
    }

    // 2. 로컬 저장 (HomeAfter 로직을 위해 필수)
    saveUserData("age", ageGroup);
    saveUserData("gradeLevel", ageGroup); // 안전하게 둘 다 저장

    // 3. 페이지 이동
    navigate(nextPath);
  };

  const goHomeAfter = () => navigate("/homeafter");

  // 각 버튼 클릭 핸들러
  const goElegrade = () => {
    // 초등학생은 학년 선택 페이지(/elegrade)로 이동
    handleSelection("elementary", "/elegrade"); 
  };

  const goMiddle = () => {
    // 중학생은 학년 선택 페이지(/middle)로 이동
    handleSelection("middle", "/middle");
  };

  const goHigh = () => {
    // 고등학생은 학년 선택 페이지(/high)로 이동
    handleSelection("high", "/high");
  };

  return (
    <div className="age-container">
      {/* 로고 */}
      <div className="age-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="age-title">나이를 선택해주세요!</h1>

      {/* 선택 박스 영역 */}
      <div className="age-box-wrapper">
        {/* 초등학생 */}
        <div className="age-box" onClick={goElegrade}>
          <img src={icon} className="age-icon" alt="초등학생" />
          <p className="age-text">초등학생</p>
        </div>

        {/* 중학생 */}
        <div className="age-box" onClick={goMiddle}>
          <img src={middle} className="age-middle" alt="중학생" />
          <p className="age-text">중학생</p>
        </div>

        {/* 고등학생 */}
        <div className="age-box" onClick={goHigh}>
          <img src={high} className="age-high" alt="고등학생" />
          <p className="age-text">고등학생</p>
        </div>
      </div>
    </div>
  );
};

export default Age;