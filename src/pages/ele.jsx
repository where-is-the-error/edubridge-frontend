import React from "react";
import "../styles/ele.css";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { saveUserData } from "../utils/userStorage";   
import { updateUserInfo } from "../utils/api"; // 👈 API 함수 import

const Ele = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => navigate("/homeafter");

  // 헬퍼 함수: DB 저장 후 로컬 저장소 업데이트 및 메인 페이지 이동
  const handleSubjectSelection = async (subject) => {
    
    // 1. DB에 주 과목 정보 저장 (새로운 필드 'subjectPrimary' 사용)
    const updatePayload = {
      subjectPrimary: subject 
    };
    
    // 🚨 API 경로 가정: PUT /api/user/info
    const success = await updateUserInfo(updatePayload, "/api/user/info"); 

    if (success) {
      // 2. DB 저장 성공 시 로컬 저장소 업데이트
      saveUserData("subject", subject); // 로컬 키는 기존대로 'subject' 사용
      
      // 3. 다음 페이지로 이동
      navigate("/mainpage");
    } else {
      alert("과목 정보 저장에 실패했습니다. 다시 시도해 주세요.");
    }
  };


  // ⬇ 과목 선택 시 DB 저장 + 로컬 저장 + 이동
  const korea = () => handleSubjectSelection("korea");
  const math = () => handleSubjectSelection("math");
  const english = () => handleSubjectSelection("english");
  const social = () => handleSubjectSelection("social");
  const science = () => handleSubjectSelection("science");

  return (
    <div className="ele-container">

      {/* 로고 */}
      <div
        className="ele-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="ele-logo-dot"></div>
        <h1 className="ele-logo-text">EduBridge</h1>
      </div>

      {/* 제목 */}
      <h1 className="ele-title">과목을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="ele-box-wrapper">

        <div className="ele-box" onClick={korea} style={{ cursor: "pointer" }}>
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">국어</p>
        </div>

        <div className="ele-box" onClick={math} style={{ cursor: "pointer" }}>
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">수학</p>
        </div>

        <div className="ele-box" onClick={english} style={{ cursor: "pointer" }}>
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">영어</p>
        </div>

        <div className="ele-box" onClick={social} style={{ cursor: "pointer" }}>
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">사회</p>
        </div>

        <div className="ele-box" onClick={science} style={{ cursor: "pointer" }}>
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default Ele;