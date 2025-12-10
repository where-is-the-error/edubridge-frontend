import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";
import { getUserData } from "../../utils/userStorage";
import { updateUserInfo, getCrawledData } from "../../utils/api"; // getCrawledData 추가

const Main = () => {
  const [user, setUser] = useState({});
  const [crawledData, setCrawledData] = useState([]); // 데이터 상태 추가

  useEffect(() => {
    const data = getUserData();
    setUser(data || { nickname: "게스트" });

    if (data && Object.keys(data).length > 0) {
      sendDataToDatabase(data);
    }

    // ⭐️ 크롤링 데이터 불러오기 실행
    const fetchData = async () => {
      const result = await getCrawledData();
      setCrawledData(result);
    };
    fetchData();
  }, []);

  const sendDataToDatabase = async (data) => {
    try {
      await updateUserInfo({
        gradeLevel: data.age,
        gradeNumber: parseInt(data.grade),
        track: data.track,
        subjectPrimary: data.subject,
        subjectDetail: data.scienceDetail,
      });
      // console.log("DB 동기화 완료");
    } catch (error) {
      console.error("DB 동기화 실패", error);
    }
  };

  return (
    <div className="home"> 
      <Navbar user={user} />

      <div className="main-content-wrapper" style={{ marginTop: "20px" }}>
        {/* ⭐️ 데이터를 Carousel에 전달 */}
        <Carousel data={crawledData} />
      </div>
    </div>
  );
};

export default Main;