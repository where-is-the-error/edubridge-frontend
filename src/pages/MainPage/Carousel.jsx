import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MainPage/Carousel.css";
import BigCard from "./BigCard";
import SmallCard from "./Smallcard";

const Carousel = ({ data }) => {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedData(data[0]);
    }
  }, [data]);

  if (!data || data.length === 0 || !selectedData) {
    return (
      <div className="carousel-loading">
        <p>책을 펼치는 중입니다...</p>
      </div>
    );
  }

  const smallCardData = data.filter(item => item.id !== selectedData.id).slice(0, 6);

  return (
    <div className="book-perspective">
      <div className="book-container">
        
        {/* 📖 왼쪽 페이지 */}
        <div className="book-page left-page">
          <div className="page-content">
            <BigCard key={selectedData.id} data={selectedData} />
          </div>
        </div>

        {/* 📖 오른쪽 페이지 */}
        <div className="book-page right-page">
          <div className="page-content grid-layout">
            {smallCardData.map((item) => (
              <SmallCard 
                key={item.id} 
                data={item} 
                onClick={() => setSelectedData(item)} 
              />
            ))}
          </div>
        </div>

        {/* 🏷️ 책갈피 (인덱스) - 페이지 뒤에 숨겨진 느낌을 위해 컨테이너 직속 자식으로 배치 */}
        <div className="book-bookmarks">
          <div className="bookmark red" onClick={() => navigate("/mainpage")}>
            <span>메인으로</span>
          </div>
          <div className="bookmark orange" onClick={() => navigate("/ai")}>
            <span>학습하기</span>
          </div>
          <div className="bookmark yellow" onClick={() => navigate("/profile")}>
            <span>내 정보</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;