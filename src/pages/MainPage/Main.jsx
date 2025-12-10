import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"; // 👈 Navbar 컴포넌트 import (필수!)
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";
import { fetchUserInfo, getCrawledData } from "../../utils/api";

const Main = () => {
  const [user, setUser] = useState(null);
  const [crawledData, setCrawledData] = useState([]);

  useEffect(() => {
    const init = async () => {
      // 1. 사용자 정보 가져오기
      try {
        const userData = await fetchUserInfo();
        if (userData) {
          setUser({
            nickname: userData.nickname,
            age: userData.gradeLevel,
            grade: userData.gradeNumber,
            subject: userData.subjectPrimary,
            scienceDetail: userData.subjectDetail,
            track: userData.track
          });
        } else {
          setUser({ nickname: "게스트" });
        }
      } catch (e) {
        console.error("User fetch error", e);
        setUser({ nickname: "게스트" });
      }

      // 2. 크롤링 데이터 가져오기
      try {
        const result = await getCrawledData();
        setCrawledData(result || []);
      } catch (e) {
        console.error("Data fetch error", e);
      }
    };

    init();
  }, []);

  return (
    <div className="home"> 
      {/* ⭐️ Navbar 추가: 상단에 고정된 네비게이션 바 표시 */}
      <Navbar user={user} />

      {/* Navbar 높이(72px)만큼 콘텐츠가 가려지지 않도록 marginTop 조정 
         (기존 50px -> 80px 또는 100px 권장)
      */}
      <div className="main-content-wrapper" style={{ marginTop: "100px" }}>
        <Carousel data={crawledData} />
      </div>
    </div>
  );
};

export default Main;