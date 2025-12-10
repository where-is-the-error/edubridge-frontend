import React from "react";
import "../../styles/MainPage/BigCard.css";

const BigCard = ({ data }) => {
  if (!data) return <div className="bigcard-wrapper">Loading...</div>;

  // 별점 계산 (5점 만점 기준 백분율)
  const rating = data.aiRating || 0;
  const percentage = (rating / 5) * 100;

  return (
    <div className="bigcard-wrapper">
      <div 
        className="video-box" 
        style={{ 
          backgroundImage: `url(${data.imageUrl})`,
          /* ⭐️ 수정됨: 가로/세로 비율 유지하며 전체 보이기 */
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <a href={data.detailUrl} target="_blank" rel="noreferrer" className="big-overlay">
          영상 보러가기 ▶
        </a>
      </div>

      <h2 className="video-title">{data.title}</h2>

      <div className="rating-section">
        <p className="section-title">AI 분석 리포트</p>
        
        {/* 별점 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <div className="star-rating-container">
            <span>★★★★★</span>
            <div className="star-rating-fill" style={{ width: `${percentage}%` }}>
              ★★★★★
            </div>
          </div>
          <span style={{ color: 'black', fontSize: '1rem', fontWeight: 'bold' }}>
            ({rating.toFixed(1)}점)
          </span>
        </div>

        {/* 코멘트 */}
        <p className="ai-comment-box">
          {data.aiComment}
        </p>
      </div>
    </div>
  );
};

export default BigCard;