// src/utils/userStorage.js

// 사용자 선택 데이터 저장 (로컬 전용)
export const saveLocalUserData = (key, value) => {
  const existing = JSON.parse(localStorage.getItem("userData")) || {};
  const updated = { ...existing, [key]: value };
  localStorage.setItem("userData", JSON.stringify(updated));
};

// 🚨 백엔드 주소를 실제 실행 중인 주소와 경로로 변경
const API_BASE_URL = "http://localhost:3000";
const API_PATH = "/api/user/info"; // 사용자 정보 업데이트 경로 가정

// 사용자 선택 데이터 저장 (백엔드 연동)
export const saveUserData = async (key, value) => {
  // 1) 로컬에 먼저 저장
  saveLocalUserData(key, value);

  // 🔑 토큰이 없으면 서버에 요청을 보내지 않습니다.
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.warn("경고: 토큰 없음. 로컬에만 저장되었습니다.");
    return;
  }

  // 2) 백엔드 API에 저장
  try {
    await fetch(API_BASE_URL + API_PATH, {
      method: "PUT", // 정보 업데이트는 PUT/PATCH 사용
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // 🔑 인증 토큰 포함
      },
      body: JSON.stringify({ [key]: value }),
    });
    console.log(`DB 업데이트 성공: ${key}: ${value}`);
  } catch (error) {
    console.error("서버 저장 실패: 네트워크 오류 또는 CORS 문제 발생", error);
  }
};

// 모든 사용자 정보 가져오기
export const getUserData = () => {
  return JSON.parse(localStorage.getItem("userData"));
};