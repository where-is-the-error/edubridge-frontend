import React from "react";
import "./middlesub.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const MiddleSub = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  return (
    <div className="middlesub-container">

      {/* 로고 */}
      <div
        className="middlesub-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="middlesub-logo-dot"></div>
        <h1 className="middlesub-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="middlesub-title">과목을 선택해주세요!</h1>

      {/* 선택 박스 */}
      <div className="middlesub-box-wrapper">

        <div className="middlesub-box">
          <img src={icon} className="middlesub-icon" alt="icon" />
          <p className="middlesub-text">국어</p>
        </div>

        <div className="middlesub-box">
          <img src={icon} className="middlesub-icon" alt="icon" />
          <p className="middlesub-text">수학</p>
        </div>

        <div className="middlesub-box">
          <img src={icon} className="middlesub-icon" alt="icon" />
          <p className="middlesub-text">영어</p>
        </div>

        <div className="middlesub-box">
          <img src={icon} className="middlesub-icon" alt="icon" />
          <p className="middlesub-text">사회</p>
        </div>

        <div className="middlesub-box">
          <img src={icon} className="middlesub-icon" alt="icon" />
          <p className="middlesub-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default MiddleSub;
