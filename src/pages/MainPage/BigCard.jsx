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
          backgroundSize: 'cover',
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
        
        {/* ⭐️ 소수점 별점 구현 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <div className="star-rating-container">
            {/* 회색 배경 별 (항상 5개) */}
            <span>★★★★★</span>
            {/* 노란색 채워진 별 (width로 조절) */}
            <div className="star-rating-fill" style={{ width: `${percentage}%` }}>
              ★★★★★
            </div>
          </div>
          <span style={{ color: 'black', fontSize: '1rem', fontWeight: 'bold' }}>
            ({rating.toFixed(1)}점)
          </span>
        </div>

        {/* ⭐️ 줄바꿈이 적용된 코멘트 (CSS white-space: pre-wrap 덕분에 \n이 적용됨) */}
        <p className="ai-comment-box">
          {data.aiComment}
        </p>
      </div>
    </div>
  );
};

export default BigCard;