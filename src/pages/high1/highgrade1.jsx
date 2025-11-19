import React from "react";
import "./highgrade1.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const HighGrade1 = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  return (
    <div className="highgrade1-container">
      {/* 로고 */}
      <div
        className="highgrade1-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="highgrade1-logo-dot"></div>
        <h1 className="highgrade1-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="highgrade1-title">과목을 선택해주세요!</h1>

      {/* 박스 그룹 */}
      <div className="highgrade1-box-wrapper">
        <div className="highgrade1-box">
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">국어</p>
        </div>

        <div className="highgrade1-box">
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">수학</p>
        </div>

        <div className="highgrade1-box">
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">영어</p>
        </div>

        <div className="highgrade1-box">
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">사회</p>
        </div>

        <div className="highgrade1-box">
          <img src={icon} className="highgrade1-icon" alt="icon" />
          <p className="highgrade1-text">과학</p>
        </div>
      </div>
    </div>
  );
};

export default HighGrade1;
