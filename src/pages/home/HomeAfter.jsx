import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeAfter.css";
import tiger2 from "../../assets/tiger2.png";

const HomeAfter = () => {
  const navigate = useNavigate();

  return (
    <div className="after-container">

      {/* 로고 */}
      <div className="after-logo">
        <div className="after-logo-dot"></div>
        <h1 className="after-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="after-content">

        <div className="after-text-area">
          <h2 className="after-title">학습중개사이트</h2>

          <div className="after-btn-group">
            <button
              className="after-btn-continue"
              onClick={() => navigate("/dashboard")}
            >
              Continue!
            </button>

            <button
              className="after-btn-change"
              onClick={() => navigate("/")}
            >
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
