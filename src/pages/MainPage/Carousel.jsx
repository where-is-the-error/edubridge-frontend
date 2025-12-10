import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MainPage/Carousel.css";
import BigCard from "./BigCard";
import SmallCard from "./Smallcard";

const Carousel = ({ data }) => {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState(null);
  
  // 📖 책 펼침 상태 (false = 닫힘)
  const [isBookOpen, setIsBookOpen] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedData(data[0]);
      
      // 1초 뒤에 책 펼치기
      const timer = setTimeout(() => {
        setIsBookOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [data]);

  const smallCardData = (data && selectedData) 
    ? data.filter(item => item.id !== selectedData.id).slice(0, 6) 
    : [];

  return (
    <div className="book-perspective">
      <div className={`book-container ${!isBookOpen ? 'book-closed' : ''}`}>
        
        {/* ⭐️ 책장(Leaf): 표지(앞) + 왼쪽 페이지(뒤) */}
        <div className="book-leaf">
          
          {/* 📘 앞면: 표지 */}
          <div className="book-cover">
            <h1>EDU<br/>BRIDGE</h1>
            <p>AI 맞춤 학습 가이드북</p>
          </div>

          {/* 📖 뒷면: 왼쪽 페이지 (메인 콘텐츠) */}
          <div className="book-page left-page">
            <div className="page-content">
              {selectedData ? (
                <BigCard data={selectedData} />
              ) : (
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                  <p>데이터를 불러오는 중...</p>
                </div>
              )}
            </div>
          </div>
        
        </div> {/* End of book-leaf */}


        {/* 📖 바닥면: 오른쪽 페이지 (리스트) */}
        <div className="book-page right-page">
          <div className="page-content grid-layout">
            {smallCardData.length > 0 && smallCardData.map((item) => (
              <SmallCard 
                key={item.id} 
                data={item} 
                onClick={() => setSelectedData(item)} 
              />
            ))}
          </div>
        </div>

        {/* 🏷️ 책갈피 (순서 및 색상 정리) */}
        <div className="book-bookmarks">
          
          {/* 1. 메인으로 (Red) */}
          <div className="bookmark red" onClick={() => navigate("/mainpage")}>
            <span>메인으로</span>
          </div>

          {/* 2. 학습하기 (Orange) */}
          <div className="bookmark orange" onClick={() => navigate("/ai")}>
            <span>학습하기</span>
          </div>

          {/* 3. 내 정보 (Yellow) */}
          <div className="bookmark yellow" onClick={() => navigate("/profile")}>
            <span>내 정보</span>
          </div>

          {/* 4. 시간표 (Green) */}
          <div className="bookmark green" onClick={() => navigate("/timetable")}>
            <span>시간표</span>
          </div>

          {/* 5. 메모 (Purple) - 메모는 임시로 시간표 페이지나 메인으로 연결 */}
          <div className="bookmark purple" onClick={() => navigate("/timetable")}>
            <span>메모</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Carousel;