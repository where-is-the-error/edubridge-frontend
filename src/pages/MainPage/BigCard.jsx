import React from "react";
import "../../styles/MainPage/BigCard.css";

const BigCard = ({ data }) => {
  if (!data) return <div className="bigcard-wrapper">Loading...</div>;

  const renderStars = (rating) => {
    const score = Math.round(rating || 0);
    return "★".repeat(score) + "☆".repeat(5 - score);
  };

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
        <div className="average-rating">
          {renderStars(data.aiRating)} <span style={{color:'black', fontSize:'0.9rem'}}>({data.aiRating}점)</span>
        </div>
        <p className="ai-comment-box">
          "{data.aiComment}"
        </p>
      </div>
    </div>
  );
};

export default BigCard;