import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css"; // CSS import 확인

import { getUserData } from "../../utils/userStorage";
import { updateUserInfo } from "../../utils/api"; 

const Main = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = getUserData();
    // 닉네임이 없으면 '게스트'로 설정 (로그인 시 로컬스토리지에 닉네임 저장 로직이 필요할 수 있음)
    setUser(data || { nickname: "게스트" });

    if (data && Object.keys(data).length > 0) {
      sendDataToDatabase(data);
    }
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
      console.log("DB 동기화 완료");
    } catch (error) {
      console.error("DB 동기화 실패", error);
    }
  };

  return (
    <div className="home"> 
      {/* 🌟 수정됨: Navbar에 user 데이터를 전달합니다 */}
      <Navbar user={user} />

      <div className="main-content-wrapper" style={{ marginTop: "20px" }}>
        <Carousel />
      </div>
    </div>
  );
};

export default Main;