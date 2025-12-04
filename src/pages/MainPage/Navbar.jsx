// src/pages/MainPage/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/MainPage/Navbar.css";

const Navbar = ({ user }) => {
  const [showGrade, setShowGrade] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const navigate = useNavigate();

  // 🌟 누락되었던 함수 정의 추가!
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const subjectMap = {
    korea: "국어", math: "수학", english: "영어", social: "사회", science: "과학",
    history: "한국사", world: "세계사", east: "동아시아사",
    koreageography: "한국지리", worldgeography: "세계지리",
    m1: "생활과 윤리", m2: "윤리와 사상", m3: "경제", m4: "정치와 법", m5: "사회・문화",
    physics: "물리 I", chemical: "화학 I", lifescience: "생명 I", earthscience: "지구 I",
    physics2: "물리 II", chemical2: "화학 II", lifescience2: "생명 II", earthscience2: "지구 II"
  };

  const getUserInfoText = () => {
    if (!user || !user.grade) return "학습 정보를 선택해주세요";
    let text = `${user.grade}학년`;
    const subjectKey = user.scienceDetail || user.subject;
    if (subjectKey) {
      const subjectName = subjectMap[subjectKey] || subjectKey;
      text += ` | ${subjectName} 위주`;
    }
    return text;
  };

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="logo" onClick={() => navigate("/mainpage")} style={{cursor: "pointer"}}>EduBridge</li>

        {/* ... (중간 메뉴 생략 - 기존과 동일) ... */}
        <li onMouseEnter={() => setShowGrade(true)} onMouseLeave={() => setShowGrade(false)}>
          초등학생
          {showGrade && (
            <div className="dropdown grade-dropdown">
              <p>1학년</p><p>2학년</p><p>3학년</p><p>4학년</p><p>5학년</p><p>6학년</p>
            </div>
          )}
        </li>
        <li>중학생</li>
        <li>고등학생</li>
        <li onMouseEnter={() => setShowSubject(true)} onMouseLeave={() => setShowSubject(false)}>
          과목
          {showSubject && (
            <div className="dropdown subject-dropdown">
              <p>국어</p><p>수학</p><p>영어</p><p>사회</p><p>과학</p>
            </div>
          )}
        </li>
        
        <li onClick={() => navigate("/ai")} style={{ cursor: "pointer" }}>AI</li>

        <li 
          className="profile" 
          onClick={handleProfileClick} 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-end', 
            justifyContent: 'center', 
            lineHeight: '1.2',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {user && user.nickname ? user.nickname : "게스트"}님
          </span>
          <span style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: 'normal' }}>
            {getUserInfoText()}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;