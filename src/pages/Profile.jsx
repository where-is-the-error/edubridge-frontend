// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainpage.css"; // 기존 스타일 활용 (필요 시 별도 css 생성)
import { getUserData } from "../utils/userStorage";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = getUserData();
    setUser(data);
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // 정보 삭제
    navigate("/login");   // 로그인으로 이동
  };

  const goHome = () => navigate("/mainpage");

  if (!user) {
    return (
      <div className="mainpage-container">
        <h1>로그인 정보가 없습니다.</h1>
        <button onClick={() => navigate("/login")} style={btnStyle}>로그인 하러 가기</button>
      </div>
    );
  }

  // 화면 표시용 텍스트 매핑
  const gradeText = user.grade ? `${user.grade}학년` : "정보 없음";
  const ageMap = { elementary: "초등학생", middle: "중학생", high: "고등학생" };
  
  return (
    <div className="mainpage-container" style={{ gap: "20px" }}>
      {/* 상단 로고 (홈으로 이동) */}
      <div style={{ position: "absolute", top: "2vh", left: "2vw", cursor: "pointer", display: "flex", alignItems: "center" }} onClick={goHome}>
        <img src={logo} alt="logo" style={{ width: "50px" }} />
        <img src={logotext} alt="text" style={{ width: "150px", marginLeft: "-10px" }} />
      </div>

      <h1 style={{ color: "#1C91FF", marginTop: "50px" }}>내 프로필</h1>

      {/* 프로필 카드 */}
      <div className="info-box" style={{ width: "600px", padding: "40px" }}>
        <div style={rowStyle}>
          <span style={labelStyle}>이름</span>
          <span style={valueStyle}>{user.nickname || "게스트"}</span>
        </div>
        
        <div style={rowStyle}>
          <span style={labelStyle}>학교 급</span>
          <span style={valueStyle}>{ageMap[user.age] || "-"}</span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>학년</span>
          <span style={valueStyle}>{gradeText}</span>
        </div>

        {user.track && (
          <div style={rowStyle}>
            <span style={labelStyle}>계열</span>
            <span style={valueStyle}>{user.track === "society" ? "문과" : "이과"}</span>
          </div>
        )}

        <div style={rowStyle}>
          <span style={labelStyle}>주력 과목</span>
          <span style={valueStyle}>{user.subject || "-"}</span>
        </div>
        
        {user.scienceDetail && (
           <div style={rowStyle}>
           <span style={labelStyle}>과학 세부</span>
           <span style={valueStyle}>{user.scienceDetail}</span>
         </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <button onClick={goHome} style={{ ...btnStyle, backgroundColor: "#ccc", color: "#333" }}>
          메인으로
        </button>
        <button onClick={handleLogout} style={{ ...btnStyle, backgroundColor: "#FF4B4B" }}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

// 간단한 인라인 스타일
const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #eee",
  padding: "15px 0",
};
const labelStyle = { fontWeight: "bold", color: "#555", fontSize: "1.2rem" };
const valueStyle = { fontWeight: "bold", color: "#1C91FF", fontSize: "1.2rem" };
const btnStyle = {
  padding: "12px 30px",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  color: "white",
};

export default Profile;