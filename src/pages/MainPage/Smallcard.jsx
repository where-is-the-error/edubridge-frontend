import React from "react";
import "../../styles/MainPage/SmallCard.css";

const SmallCard = ({ data }) => {
  if (!data) return <div className="small-card"></div>;

  const renderStars = (rating) => {
    const score = Math.round(rating || 0);
    return "★".repeat(score) + "☆".repeat(5 - score);
  };

  return (
    <div className="small-card">
      <div className="card-image-wrapper">
        <img src={data.imageUrl} alt={data.title} className="card-image" />
        <a href={data.detailUrl} target="_blank" rel="noopener noreferrer" className="watch-btn">
          보러가기 ▶
        </a>
      </div>

      <div className="card-info">
        <h3 className="card-title">{data.title}</h3>
        
        <div className="card-ai-section">
          <span className="ai-badge">AI 분석</span>
          <span className="ai-stars">{renderStars(data.aiRating)}</span>
        </div>
        
        <p className="ai-comment">
          {data.aiComment ? `"${data.aiComment}"` : "코멘트 없음"}
        </p>
      </div>
    </div>
  );
};

export default SmallCard;