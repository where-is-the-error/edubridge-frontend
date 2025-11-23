import React, { useEffect, useState } from "react";
import "../styles/mainpage.css";
import { getUserData } from "../utils/userStorage";

const MainPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = getUserData();
    setUser(data || {});
  }, []);

  // 매핑
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
    history: "한국사",
  };

  const trackMap = {
    society: "문과",
    science: "이과",
  };

  const scienceDetailMap = {
    integrated: "통합과학",
    experiment: "과학실험탐구",
  };

  // 고1 + 과학일 때만 세부과목 표시
  const selectedSubjectText =
    user.age === "high" &&
    user.grade === "1" &&
    user.subject === "science" &&
    user.scienceDetail
      ? scienceDetailMap[user.scienceDetail]
      : subjectMap[user.subject];

  return (
    <div className="mainpage-container">
      <h1>메인 페이지</h1>

      <div className="info-box">
        {/* 나이 */}
        <p><strong>나이:</strong> {ageMap[user.age]}</p>

        {/* 중학생 & 고등학생만 학년 출력 */}
        {user.age !== "elementary" && (
          <p><strong>학년:</strong> {user.grade}학년</p>
        )}

        {/* 고2·고3만 계열 출력 */}
        {user.age === "high" && user.grade !== "1" && trackMap[user.track] && (
          <p><strong>계열:</strong> {trackMap[user.track]}</p>
        )}

        {/* 과목 (세부과학 처리 포함) */}
        <p><strong>선택한 과목:</strong> {selectedSubjectText}</p>
      </div>
    </div>
  );
};

export default MainPage;
