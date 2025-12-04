import React from "react";
import "../styles/highsociety2_1.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const HighSociety2_1 = () => {
  const navigate = useNavigate();

  // 로고 클릭 시 HomeAfter 페이지로 이동
  const goHomeAfter = () => {
    navigate("/homeafter");
  };

  // 연령 선택 (저장 + 이동)
  const gohistory = () => {
    navigate("/history2");
  };

  const geography = () => {
    navigate("/geography");
  };

  const morality = () => {
    navigate("/morality");
  };

  return (
    <div className="sc2_1-container">

      {/* 로고 */}
      <div className="sc2_1-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} alt="EduBridge Logo" className="logo" />
        <img src={logotext} alt="EduBridge Text Logo" className="logotext" />
      </div>

      {/* 제목 */}
      <h1 className="sc2_1-title">과목군을 선택해주세요!</h1>

      {/* 선택 박스 영역 */}
      <div className="sc2_1-box-wrapper">

        {/* 초등학생 */}
        <div className="sc2_1-box" onClick={gohistory} style={{ cursor: "pointer" }}>
          <p className="sc2_1-text">역사</p>
        </div>

        {/* 중학생 */}
        <div className="sc2_1-box" onClick={geography} style={{ cursor: "pointer" }}>
          <p className="sc2_1-text">지리</p>
        </div>

        {/* 고등학생 */}
        <div className="sc2_1-box" onClick={morality} style={{ cursor: "pointer" }}>
          <p className="sc2_1-text">사회・윤리</p>
        </div>
      </div>
    </div>
  );
};

export default HighSociety2_1;
