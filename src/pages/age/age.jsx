import React from "react";
import "./age.css";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png"; // 아이콘 이미지

const Age = () => {
  const navigate = useNavigate();

  // 로고 클릭 시 HomeAfter 페이지로 이동
  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  // 연령 선택 시 이동할 페이지
  const goElementary = () => navigate("/ele");     // 초등학생
  const goMiddle = () => navigate("/middle");          // 중학생 (원하면 수정 가능)
  const goHigh = () => navigate("/high");           // 고등학생 (원하면 수정 가능)

  return (
    <div className="age-container">

      {/* 로고 */}
      <div className="age-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <div className="age-logo-dot"></div>
        <h1 className="age-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 제목 */}
      <h1 className="age-title">나이를 선택해주세요!</h1>

      {/* 선택 박스 영역 */}
      <div className="age-box-wrapper">

        {/* 초등학생 */}
        <div className="age-box" onClick={goElementary} style={{ cursor: "pointer" }}>
          <img src={icon} className="age-icon" alt="student" />
          <p className="age-text">초등학생</p>
        </div>

        {/* 중학생 */}
        <div className="age-box" onClick={goMiddle} style={{ cursor: "pointer" }}>
          <img src={icon} className="age-icon" alt="student" />
          <p className="age-text">중학생</p>
        </div>

        {/* 고등학생 */}
        <div className="age-box" onClick={goHigh} style={{ cursor: "pointer" }}>
          <img src={icon} className="age-icon" alt="student" />
          <p className="age-text">고등학생</p>
        </div>
      </div>
    </div>
  );
};

export default Age;
