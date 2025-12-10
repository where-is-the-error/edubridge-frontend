import React from "react";
import "../../styles/MainPage/Carousel.css";
import BigCard from "./BigCard";
import SmallCard from "./Smallcard";

const Carousel = ({ data }) => {
  // 데이터 로딩 중 처리
  if (!data || data.length === 0) {
    return (
      <div className="carousel" style={{ height: "400px", background: "#f8f9fa" }}>
        <p style={{ color: "#888" }}>추천 영상을 불러오는 중입니다...</p>
      </div>
    );
  }

  // 첫 번째는 BigCard, 나머지는 SmallCard (최대 6개)
  const bigCardData = data[0];
  const smallCardData = data.slice(1, 7);

  return (
    <div className="carousel">
      <button className="arrow left">❮</button>

      <div className="carousel-content">
        <div className="big-section">
          <BigCard data={bigCardData} />
        </div>
        
        <div className="small-section">
          {smallCardData.map((item) => (
            <SmallCard key={item.id} data={item} />
          ))}
        </div>
      </div>

      <button className="arrow right">❯</button>
    </div>
  );
};

export default Carousel;