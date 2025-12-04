// src/pages/MainPage/Main.jsx

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";

// 유틸리티 함수 import
import { getUserData } from "../../utils/userStorage";
import { updateUserInfo } from "../../utils/api"; 

const Main = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // 1. 로컬 스토리지에서 데이터 읽기
    const data = getUserData();
    
    // 2. 데이터가 있으면 상태 업데이트, 없으면 기본값(게스트) 설정
    if (data) {
      setUser({
        nickname: data.nickname || "게스트",
        age: data.age,
        grade: data.grade,       // 숫자(3) 또는 문자열("3") 모두 가능
        subject: data.subject,
        track: data.track,
        scienceDetail: data.scienceDetail
      });
    } else {
      setUser({ nickname: "게스트" });
    }

    // 3. (선택사항) 데이터베이스 동기화
    // 이미 로그인 시 최신 정보를 받아왔으므로, 데이터가 변경된 경우에만 호출하도록 최적화할 수 있습니다.
    if (data && Object.keys(data).length > 0) {
      sendDataToDatabase(data);
    }
  }, []);

  const sendDataToDatabase = async (data) => {
    try {
      await updateUserInfo({
        gradeLevel: data.age,
        gradeNumber: parseInt(data.grade), // 백엔드는 Integer를 기대하므로 형변환
        track: data.track,
        subjectPrimary: data.subject,
        subjectDetail: data.scienceDetail,
      });
      console.log("DB 데이터 동기화 완료");
    } catch (error) {
      console.error("DB 데이터 동기화 실패:", error);
    }
  };

  return (
    <div className="home"> 
      {/* 🌟 Navbar에 user 정보 전달 (닉네임, 학년, 과목 등이 포함됨) */}
      <Navbar user={user} />

      <div className="main-content-wrapper" style={{ marginTop: "20px" }}>
        <Carousel />
      </div>
    </div>
  );
};

export default Main;