// 사용자 선택 데이터 저장 (프론트용)
export const saveLocalUserData = (key, value) => {
  const existing = JSON.parse(localStorage.getItem("userData")) || {};
  const updated = { ...existing, [key]: value };
  localStorage.setItem("userData", JSON.stringify(updated));
};

// 나중에 백엔드가 생기면 이 부분만 수정해서 서버에 저장
export const saveUserData = async (key, value) => {
  // 1) 로컬에 먼저 저장
  saveLocalUserData(key, value);

  // 2) 백엔드 API가 있을 경우 서버에도 저장
  try {
    await fetch("https://your-backend.com/api/user/update" , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: value }),
      credentials: "include", // 쿠키 세션 유지
    });
  } catch (error) {
    console.log("서버 저장 실패(백엔드 없음): 로컬 저장만 진행됨");
  }
};

// 모든 사용자 정보 가져오기
export const getUserData = () => {
  return JSON.parse(localStorage.getItem("userData"));
};
