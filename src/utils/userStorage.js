// src/utils/userStorage.js

// 사용자 선택 데이터 저장 (로컬 전용)
export const saveUserData = (key, value) => {
  const existing = JSON.parse(localStorage.getItem("userData")) || {};
  const updated = { ...existing, [key]: value };
  localStorage.setItem("userData", JSON.stringify(updated));
  // console.log(`[Local] ${key} 저장 완료:`, value);
};

// 모든 사용자 정보 가져오기
export const getUserData = () => {
  return JSON.parse(localStorage.getItem("userData"));
};

// 특정 키의 데이터 가져오기
export const getUserDataByKey = (key) => {
  const data = getUserData();
  return data ? data[key] : null;
};