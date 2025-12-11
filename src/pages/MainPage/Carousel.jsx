import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MainPage/Carousel.css";
import BigCard from "./BigCard";
import SmallCard from "./Smallcard";

const Carousel = ({ data, user }) => {
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState(null);
  const [isBookOpen, setIsBookOpen] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedData(data[0]);
      const timer = setTimeout(() => {
        setIsBookOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  const smallCardData = (data && selectedData) 
    ? data.filter(item => item.id !== selectedData.id).slice(0, 6) 
    : [];

  const getUserInfoText = () => {
    if (!user || !user.age) return "맞춤 학습 추천";
    const ageMap = { elementary: "초등학교", middle: "중학교", high: "고등학교" };
    const subjectMap = {
      korea: "국어", math: "수학", english: "영어", social: "사회", science: "과학",
      history: "한국사", world: "세계사", east: "동아시아사",
      koreageography: "한국지리", worldgeography: "세계지리",
      m1: "생활과 윤리", m2: "윤리와 사상", m3: "경제", m4: "정치와 법", m5: "사회・문화",
      physics: "물리 I", chemical: "화학 I", lifescience: "생명 I", earthscience: "지구 I",
      physics2: "물리 II", chemical2: "화학 II", lifescience2: "생명 II", earthscience2: "지구 II"
    };
    const schoolName = ageMap[user.age] || "";
    const gradeName = user.grade ? `${user.grade}학년` : "";
    const subjectName = subjectMap[user.subject] || user.subject || "";
    return `${schoolName} ${gradeName} ${subjectName}`;
  };

  return (
    <div className="book-perspective">
      <div className={`book-container ${!isBookOpen ? 'book-closed' : ''}`}>
        
        {/* 책 바깥 왼쪽 상단 정보 (책 펼쳐지면 보임) */}
        <div className="book-header-info">
          {getUserInfoText()}
        </div>

        <div className="book-leaf">
          <div className="book-cover">
            <h1>EDU<br/>BRIDGE</h1>
            <p>AI 맞춤 학습 가이드북</p>
          </div>

          <div className="book-page left-page">
            <div className="page-content">
              {selectedData ? (
                /* ⭐️ 핵심 수정: key를 부여하여 데이터 변경 시 애니메이션 재실행 */
                <BigCard 
                  key={selectedData.id} 
                  data={selectedData} 
                />
              ) : (
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                  <p>데이터를 불러오는 중...</p>
                </div>
              )}
            </div>
          </div>
        </div>

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

        <div className="book-bookmarks">
          <div className="bookmark red" onClick={() => navigate("/mainpage")}><span>메인으로</span></div>
          <div className="bookmark orange" onClick={() => navigate("/ai")}><span>학습하기</span></div>
          <div className="bookmark yellow" onClick={() => navigate("/profile")}><span>내 정보</span></div>
          <div className="bookmark green" onClick={() => navigate("/timetable")}><span>시간표</span></div>
          <div className="bookmark purple" onClick={() => navigate("/memos")}><span>메모</span></div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;