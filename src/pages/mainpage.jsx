import React, { useEffect, useState } from "react";
import "../styles/mainpage.css";
import { getUserData } from "../utils/userStorage";

const MainPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = getUserData();
    setUser(data || {});
  }, []);

  // 한국어 변환 매핑
  const ageMap = {
    elementary: "초등학생",
    middle: "중학생",
    high: "고등학생",
  };

  const subjectMap = {
    korea: "국어",
    math: "수학",
    english: "영어",
    social: "사회",
    science: "과학",
  };

  const trackMap = {
    society: "문과",
    science: "이과",
  };

  return (
    <div className="mainpage-container">
      <h1>메인 페이지</h1>

      <div className="info-box">
        <p><strong>나이:</strong> {ageMap[user.age]}</p>
        <p><strong>학년:</strong> {user.grade}학년</p>

        {user.track && (
          <p><strong>계열:</strong> {trackMap[user.track]}</p>
        )}

        <p><strong>선택한 과목:</strong> {subjectMap[user.subject]}</p>
      </div>

    </div>
  );
};

export default MainPage;
