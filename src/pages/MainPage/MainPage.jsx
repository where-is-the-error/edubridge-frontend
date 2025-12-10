import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar"; // ❌ Navbar 제거
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";
import { fetchUserInfo, getCrawledData } from "../../utils/api";

const Main = () => {
  const [user, setUser] = useState({});
  const [crawledData, setCrawledData] = useState([]);

  useEffect(() => {
    // 1. 사용자 정보
    const loadUser = async () => {
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
    };

    // 2. 크롤링 데이터
    const loadData = async () => {
      const result = await getCrawledData();
      setCrawledData(result);
    };

    loadUser();
    loadData();
  }, []);

  return (
    <div className="home"> 
      {/* Navbar 제거됨 */}
      <div className="main-content-wrapper" style={{ marginTop: "50px" }}>
        <Carousel data={crawledData} />
      </div>
    </div>
  );
};

export default Main;