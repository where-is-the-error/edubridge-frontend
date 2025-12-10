import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomeAfter.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger2 from "../assets/tiger2.png";
import { fetchUserInfo } from "../utils/api"; // 👈 API 함수 import

const HomeAfter = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [navigate]);

  const handleContinue = async () => {
    setLoading(true);
    // ⭐️ DB에서 최신 유저 정보 가져오기
    const user = await fetchUserInfo();
    setLoading(false);

    if (user && user.gradeLevel && user.gradeNumber) {
      // 정보가 다 있으면 메인으로
      navigate("/mainpage");
    } else {
      // 정보가 부족하면 선택 페이지로
      navigate("/age");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="after-container">
      {/* ... (UI 그대로 유지) ... */}
      <div className="after-logo">
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      <div className="after-content">
        <div className="after-text-area">
          <h2 className="after-title">학습중개사이트</h2>
          <div className="after-btn-group">
            <button className="after-btn-continue" onClick={handleContinue} disabled={loading}>
              {loading ? "로딩 중..." : "Continue!"}
            </button>
            <button className="after-btn-change" onClick={handleLogout}>
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