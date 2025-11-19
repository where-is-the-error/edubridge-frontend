import React from "react";
import "./ele.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Ele = () => {
  const navigate = useNavigate();

  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  return (
    <div className="ele-container">

      {/* 로고 */}
      <div
        className="ele-logo"
        onClick={goHomeAfter}
        style={{ cursor: "pointer" }}
      >
        <div className="ele-logo-dot"></div>
        <h1 className="ele-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="ele-title">과목을 선택해주세요!</h1>

      {/* 박스 영역 */}
      <div className="ele-box-wrapper">

        <div className="ele-box">
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">국어</p>
        </div>

        <div className="ele-box">
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">수학</p>
        </div>

        <div className="ele-box">
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">영어</p>
        </div>

        <div className="ele-box">
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">사회</p>
        </div>

        <div className="ele-box">
          <img src={icon} className="ele-icon" alt="icon" />
          <p className="ele-text">과학</p>
        </div>

      </div>
    </div>
  );
};

export default Ele;
