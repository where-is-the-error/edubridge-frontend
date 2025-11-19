import React from "react";
import "./high.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const High = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  // 1학년
  const goHighGrade1 = () => navigate("/highgrade1");

  // 2학년
  const goHighSub2 = () => navigate("/highsub2");

  // 3학년
  const goHighSub3 = () => navigate("/highsub3");

  return (
    <div className="high-container">

      {/* 로고 */}
      <div
        className="high-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="high-logo-dot"></div>
        <h1 className="high-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="high-title">학년을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="high-box-wrapper">

        {/* 1학년 */}
        <div className="high-box" onClick={goHighGrade1} style={{ cursor: "pointer" }}>
          <img src={icon} className="high-icon" alt="icon" />
          <p className="high-text">1학년</p>
        </div>

        {/* 2학년 */}
        <div className="high-box" onClick={goHighSub2} style={{ cursor: "pointer" }}>
          <img src={icon} className="high-icon" alt="icon" />
          <p className="high-text">2학년</p>
        </div>

        {/* 3학년 */}
        <div className="high-box" onClick={goHighSub3} style={{ cursor: "pointer" }}>
          <img src={icon} className="high-icon" alt="icon" />
          <p className="high-text">3학년</p>
        </div>

      </div>
    </div>
  );
};

export default High;
