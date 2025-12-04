import React from "react";
import "../styles/age.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png"; 
import { saveUserData } from "../utils/userStorage";
import { updateUserInfo } from "../utils/api"; // 👈 DB 업데이트 API 함수
import middle from "../assets/agemiddle.png";
import high from "../assets/agehigh.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const Age = () => {
  const navigate = useNavigate();

  // 헬퍼 함수: DB 저장 후 로컬 저장소 업데이트 및 페이지 이동
  const handleSelection = async (ageGroup, nextPath) => {
    
    // 1. DB에 나이 그룹 정보 저장 (User 모델의 gradeLevel 필드 사용)
    const updatePayload = {
      gradeLevel: ageGroup 
    };
    
    // 🚨 API 경로 가정: PUT /api/user/info
    const success = await updateUserInfo(updatePayload, "/api/user/info"); 

    if (success) {
      // 2. DsssB 저장 성공 시 로컬 저장소 업데이트 (HomeAfter 자동 리다이렉트를 위해)
      saveUserData("gradeLevel", ageGroup); // HomeAfter에서 확인하는 키에 값 저장
      saveUserData("age", ageGroup); // 'age'도 별도로 저장
      
      // 3. 다음 페이지로 이동
      navigate(nextPath); 
    } else {
      alert("연령 정보 저장에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  // 로고 클릭 시 HomeAfter 페이지로 이동
  const goHomeAfter = () => { navigate("/homeafter"); };

  // 연령 선택 (저장 + 이동)
  const goElementary = () => {
    handleSelection("elementary", "/ele"); // /ele 페이지로 이동
  const goElegrade = () => {
    saveUserData("age", "elementary");  // 저장
    navigate("/elegrade");                   // 이동
  };

  const goMiddle = () => {
    handleSelection("middle", "/middle"); // /middle 페이지로 이동 (중학생 학년 선택 페이지로 연결되어야 함)
  };

  const goHigh = () => {
    handleSelection("high", "/high"); // /high 페이지로 이동 (고등학생 학년 선택 페이지로 연결되어야 함)
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
        <div className="age-box" onClick={goElegrade} style={{ cursor: "pointer" }}>
          <img src={icon} className="age-icon" alt="student" />
          <p className="age-text">초등학생</p>
        </div>

        {/* 중학생 */}
        <div className="age-box" onClick={goMiddle} style={{ cursor: "pointer" }}>
          <img src={middle} className="age-middle" alt="student" />
          <p className="age-text">중학생</p>
        </div>

        {/* 고등학생 */}
        <div className="age-box" onClick={goHigh} style={{ cursor: "pointer" }}>
          <img src={high} className="age-high" alt="student" />
          <p className="age-text">고등학생</p>
        </div>
      </div>
    </div>
  );
};
}
export default Age;