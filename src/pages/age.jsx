import React from "react";
import "../styles/age.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png"; 
import middle from "../assets/agemiddle.png";
import high from "../assets/agehigh.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage"; 
import { updateUserInfo } from "../utils/api"; 

const Age = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // 헬퍼 함수: DB 저장 및 로컬 저장 후 이동
  const handleSelection = async (ageGroup, nextPath) => {
    // 1. DB 업데이트 시도
    try {
      await updateUserInfo({ gradeLevel: ageGroup });
    } catch (error) {
      console.error("DB 업데이트 실패 (로컬 저장은 진행됨):", error);
    }

    // 2. 로컬 저장 (HomeAfter 로직을 위해 필수)
    saveUserData("age", ageGroup);
    saveUserData("gradeLevel", ageGroup);

    // 3. 페이지 이동
    navigate(nextPath);
  };

  // 각 버튼 클릭 핸들러
  const goElegrade = () => {
    handleSelection("elementary", "/elegrade");
  };

  const goMiddle = () => {
    handleSelection("middle", "/middle");
  };

  const goHigh = () => {
    handleSelection("high", "/high");
  };

  return (
    <div className="age-container">
      <div className="age-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="age-title">나이를 선택해주세요!</h1>

      <div className="age-box-wrapper">
        <div className="age-box" onClick={goElegrade}>
          <img src={icon} className="age-icon" alt="초등학생" />
          <p className="age-text">초등학생</p>
        </div>

        <div className="age-box" onClick={goMiddle}>
          <img src={middle} className="age-middle" alt="중학생" />
          <p className="age-text">중학생</p>
        </div>

        <div className="age-box" onClick={goHigh}>
          <img src={high} className="age-high" alt="고등학생" />
          <p className="age-text">고등학생</p>
        </div>
      </div>
    </div>
  );
};

export default Age;