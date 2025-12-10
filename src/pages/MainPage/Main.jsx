import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";
import { fetchUserInfo, getCrawledData } from "../../utils/api"; // 👈 fetchUserInfo 사용

const Main = () => {
  const [user, setUser] = useState({});
  const [crawledData, setCrawledData] = useState([]);

  useEffect(() => {
    // 1. 사용자 정보 DB에서 가져오기
    const loadUser = async () => {
      const userData = await fetchUserInfo();
      if (userData) {
        // UI에서 쓰기 편하게 매핑
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

    // 2. 크롤링 데이터 가져오기
    const loadData = async () => {
      const result = await getCrawledData();
      setCrawledData(result);
    };

    loadUser();
    loadData();
  }, []);

  return (
    <div className="home"> 
      <Navbar user={user} />
      <div className="main-content-wrapper" style={{ marginTop: "20px" }}>
        <Carousel data={crawledData} />
      </div>
    </div>
  );
};

export default Main;