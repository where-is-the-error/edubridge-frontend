// src/utils/api.js

// 🚨 누락된 BASE_URL 정의 (백엔드 서버 주소)
const BASE_URL = "http://localhost:3000";

// 환경 변수에서 URL 가져오기 (없으면 기본값)
const authFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      window.location.href = "/login";
      return null;
    }

    return response;
  } catch (error) {
    console.error("API 요청 중 네트워크 오류 발생:", error);
    throw error;
  }
};

export const updateUserInfo = async (updateData) => {
  try {
    const response = await authFetch("/api/user/info", {
      method: "PUT",
      body: JSON.stringify(updateData),
    });
    return response && response.ok;
  } catch (error) {
    return false;
  }
};

export const generateAiProblem = async (prompt) => {
  try {
    const response = await authFetch("/api/ai/generate", {
      method: "POST",
      body: JSON.stringify({ userPrompt: prompt }),
    });

    if (response && response.ok) {
      return await response.text();
    }
    return "AI 응답을 받아오지 못했습니다.";
  } catch (error) {
    return "AI 서버 연결 오류가 발생했습니다.";
  }
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/api/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response;
};

// ⭐️ [추가됨] 크롤링 데이터 조회 함수
export const getCrawledData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/crawled-data`);
    if (response.ok) {
      return await response.json();
    }
    return [];
  } catch (error) {
    console.error("데이터 조회 실패:", error);
    return [];
  }
};