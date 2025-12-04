import React from "react";
import "../styles/ele.css";
import { useNavigate } from "react-router-dom";
import koreanimg from "../assets/korean.png";
import mathimg from "../assets/math.png";
import englishimg from "../assets/english.png";
import societyimg from "../assets/society.png";
import scienceimg from "../assets/science.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveUserData } from "../utils/userStorage";
import { updateUserInfo } from "../utils/api";const Ele = () => {
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
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="ele-title">과목을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="ele-box-wrapper">

        <div className="ele-box" onClick={korea} style={{ cursor: "pointer" }}>
          <img src={koreanimg} className="ele-korean" alt="icon" />
          <p className="ele-text">국어</p>
        </div>

        <div className="ele-box" onClick={math} style={{ cursor: "pointer" }}>
          <img src={mathimg} className="ele-math" alt="icon" />
          <p className="ele-text">수학</p>
        </div>

        <div className="ele-box" onClick={english} style={{ cursor: "pointer" }}>
          <img src={englishimg} className="ele-english" alt="icon" />
          <p className="ele-text">영어</p>
        </div>

        <div className="ele-box" onClick={social} style={{ cursor: "pointer" }}>
          <img src={societyimg} className="ele-society" alt="icon" />
          <p className="ele-text">사회</p>
        </div>

        <div className="ele-box" onClick={science} style={{ cursor: "pointer" }}>
          <img src={scienceimg} className="ele-science" alt="icon" />
          <p className="ele-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default Ele;