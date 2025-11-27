// ...existing code...
import React from "react";
import "../../styles/MainPageCss/BigCard.css";

const BigCard = () => {
  return (
    <div className="bigcard-wrapper">
      {/* 영상 플레이어 (회색 박스) */}
      <div className="video-box"></div>

      {/* 영상 제목 */}
      <h2 className="video-title">영상 제목</h2>

      {/* 사용자 별점 영역 */}
      <div className="rating-section">
        <p className="section-title">사용자 별점</p>
        <hr />

        {/* 평균 별점 */}
        <div className="average-rating">
          <span className="star-row">★ ★ ★ ★ ☆</span>
          <button className="rate-btn">별점 매기러 가기!</button>
        </div>

        {/* 별점 분포 그래프 */}
        <div className="rating-bars">
          {[
            { score: 5, color: "#f2c94c", width: "60%" },
            { score: 4, color: "#f2c94c", width: "45%" },
            { score: 3, color: "#eb5757", width: "80%" },
            { score: 2, color: "#f2c94c", width: "35%" },
            { score: 1, color: "#f2c94c", width: "55%" },
          ].map((item) => (
            <div key={item.score} className="rating-row">
              <span className="score-label">{item.score}점</span>

              <div className="bar-container">
                <div
                  className="bar-fill"
                  style={{ background: item.color, width: item.width }}
                />
              </div>

              <span className="count-label">개수</span>
            </div>
          ))}
        </div>

        <hr />

        {/* AI 별점 */}
        <p className="ai-title">AI 별점</p>
        <p className="ai-stars">★ ★ ★ ★ ☆</p>
      </div>
    </div>
  );
};

export default BigCard;
// ...existing code...