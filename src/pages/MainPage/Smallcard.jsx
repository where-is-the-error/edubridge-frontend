import React from "react";
import "../../styles/MainPage/SmallCard.css";

const SmallCard = ({ data, onClick }) => {
  if (!data) return <div className="small-card"></div>;

  return (
    // 클릭 이벤트를 상위 컴포넌트(Carousel)로부터 받아 실행
    <div className="small-card" onClick={onClick}>
      <div className="card-image-wrapper">
        <img src={data.imageUrl} alt={data.title} className="card-image" />
        
        {/* 마우스 올렸을 때 나타나는 간단한 오버레이 */}
        <div className="small-overlay">
          <span>선택하기</span>
        </div>
      </div>
      {/* 별점, 코멘트 등 텍스트 영역은 모두 삭제되었습니다. */}
    </div>
  );
};

export default SmallCard;