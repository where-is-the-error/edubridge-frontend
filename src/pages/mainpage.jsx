import React, { useEffect, useState } from "react";
import "../styles/mainpage.css";
import { getUserData } from "../utils/userStorage";
import { updateUserInfo } from "../utils/api"; // 👈 API 함수 import

const MainPage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = getUserData();
    setUser(data || {});

    // 🌟 1. 로컬 데이터가 있을 경우 DB에 전송
    if (data && Object.keys(data).length > 0) {
      sendDataToDatabase(data);
    }
    
    // 💡 data를 의존성 배열에 넣지 않는 이유는, 이 로직이 컴포넌트 마운트 시 단 한 번 실행되어야 하기 때문입니다.
  }, []); 

  // 🌟 2. DB 전송을 위한 비동기 함수
  const sendDataToDatabase = async (data) => {
    const success = await updateUserInfo({
      // 🚨 백엔드 User 모델 필드명에 맞게 매핑하여 전송합니다.
      // 예시: 로컬의 'age'와 'grade'를 DB의 'gradeLevel'과 'currentGrade'로 전송
      gradeLevel: data.age,         // 'elementary', 'middle', 'high'
      currentGrade: data.grade,     // '1', '2', '3'
      track: data.track,            // 'society', 'science'
      subject: data.subject,        // 'korea', 'math', 'english'
      scienceDetail: data.scienceDetail, // 'integrated', 'experiment'
      // DB에 필요한 모든 필드를 여기에 포함시켜야 합니다.
    });

    if (success) {
      console.log("사용자 정보가 성공적으로 데이터베이스에 업데이트되었습니다.");
      // 로컬에 'gradeLevelSet: true' 등의 플래그를 저장하여 불필요한 재전송을 막을 수 있습니다.
    } else {
      console.error("사용자 정보 DB 업데이트에 실패했습니다.");
    }
  };

  const subjectMap = {
    korea: "국어",
    math: "수학",
    english: "영어",
    social: "사회",
    science: "과학",
    history: "한국사",
    world: "세계사",
    east: "동아시아사",
    koreageography: "한국지리",
    worldgeography: "세계지리",
    m1: "생활과 윤리",
    m2: "윤리와 사상",
    m3: "경제",
    m4: "정치와 법",
    m5: "사회・문화",
    physics: "물리 I",
    chemical: "화학 I",
    lifescience: "생명 I",
    earthscience: "지구 I",
    physics2: "물리 II",
    chemical2: "화학 II",
    lifescience2: "생명 II",
    earthscience2: "지구 II"
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

        {/* 학년 출력 */}
          <p><strong>학년:</strong> {user.grade}학년</p>

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