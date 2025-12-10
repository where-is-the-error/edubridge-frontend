import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../../styles/MainPage/Navbar.css";
import logo from "../../assets/logo.png";
import tigerIcon from "../../assets/tiger.png"; // 프로필용

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      
      {/* 1. 로고 (좌측) */}
      <div className="nav-logo-group" onClick={() => navigate("/mainpage")}>
        <img src={logo} alt="EduBridge Logo" className="nav-logo-img" />
        <span className="nav-logo-text">EduBridge</span>
      </div>

      {/* 2. 오른쪽 메뉴 (시간표, AI, 프로필) */}
      <div className="nav-menu-group">
        
        {/* 시간표 아이콘 */}
        <div className="nav-icon-btn" onClick={() => navigate("/timetable")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <span className="nav-icon-label">시간표</span>
        </div>

        {/* AI 아이콘 */}
        <div className="nav-icon-btn" onClick={() => navigate("/ai")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
          <span className="nav-icon-label">AI</span>
        </div>

        {/* 프로필 */}
        <div className="nav-profile-box" onClick={() => navigate("/profile")}>
          <img src={tigerIcon} alt="profile" className="profile-img" />
          <div>
            <span className="profile-text">
              {user && user.nickname ? user.nickname : "게스트"}
            </span>
            <span className="profile-nim">님</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;