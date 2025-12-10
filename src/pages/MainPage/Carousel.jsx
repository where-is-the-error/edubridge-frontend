import React, { useState, useEffect } from "react";
import "../../styles/MainPage/Carousel.css";
import BigCard from "./BigCard";
import SmallCard from "./Smallcard";

const Carousel = ({ data }) => {
  // 현재 빅 카드에 보여줄 데이터를 상태로 관리
  const [selectedData, setSelectedData] = useState(null);

  // 데이터가 로드되면 첫 번째 영상을 기본값으로 설정
  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedData(data[0]);
    }
  }, [data]);

  // 데이터 로딩 중 처리
  if (!data || data.length === 0 || !selectedData) {
    return (
      <div className="carousel" style={{ height: "600px", background: "#f8f9fa", borderRadius: "16px" }}>
        <p style={{ color: "#888" }}>추천 영상을 불러오는 중입니다...</p>
      </div>
    );
  }

  // 오른쪽 리스트: 현재 선택된(빅카드에 있는) 영상을 제외하고 나머지 표시 (최대 6개)
  const smallCardData = data.filter(item => item.id !== selectedData.id).slice(0, 6);

  return (
    <div className="carousel">
      <div className="carousel-content">
        {/* 왼쪽: 선택된 큰 카드 (정보 모두 표시) */}
        <div className="big-section">
          <BigCard data={selectedData} />
        </div>
        
        {/* 오른쪽: 작은 카드 리스트 (썸네일만 표시, 클릭 시 빅카드로 이동) */}
        <div className="small-section">
          {smallCardData.map((item) => (
            <SmallCard 
              key={item.id} 
              data={item} 
              onClick={() => setSelectedData(item)} // 클릭 시 해당 데이터로 교체
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;