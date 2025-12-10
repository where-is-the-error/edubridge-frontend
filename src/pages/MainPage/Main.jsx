import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";
import { fetchUserInfo, getCrawledData } from "../../utils/api";

const Main = () => {
  const [user, setUser] = useState(null); // 초기값 null로 명확히 구분
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
      {/* Navbar 컴포넌트 삭제됨 */}
      <div className="main-content-wrapper" style={{ marginTop: "50px" }}>
        <Carousel data={crawledData} />
      </div>
    </div>
  );
};

export default Main;