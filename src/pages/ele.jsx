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
import { updateUserInfo } from "../utils/api"; // api.js 사용

const Ele = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const handleSubjectSelection = async (subject) => {
    // 1. DB 저장 (API 호출)
    const success = await updateUserInfo({ subjectPrimary: subject });

    if (success) {
      // 2. 로컬 저장 (API 호출 없음, 순수 로컬)
      saveUserData("subject", subject);
      navigate("/mainpage");
    } else {
      alert("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="ele-container">
      <div className="ele-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <h1 className="ele-title">과목을 선택해주세요!</h1>

      <div className="ele-box-wrapper">
        <div className="ele-box" onClick={() => handleSubjectSelection("korea")}>
          <img src={koreanimg} className="ele-korean" alt="icon" />
          <p className="ele-text">국어</p>
        </div>
        <div className="ele-box" onClick={() => handleSubjectSelection("math")}>
          <img src={mathimg} className="ele-math" alt="icon" />
          <p className="ele-text">수학</p>
        </div>
        <div className="ele-box" onClick={() => handleSubjectSelection("english")}>
          <img src={englishimg} className="ele-english" alt="icon" />
          <p className="ele-text">영어</p>
        </div>
        <div className="ele-box" onClick={() => handleSubjectSelection("social")}>
          <img src={societyimg} className="ele-society" alt="icon" />
          <p className="ele-text">사회</p>
        </div>
        <div className="ele-box" onClick={() => handleSubjectSelection("science")}>
          <img src={scienceimg} className="ele-science" alt="icon" />
          <p className="ele-text">과학</p>
        </div>
      </div>
    </div>
  );
};

export default Ele;