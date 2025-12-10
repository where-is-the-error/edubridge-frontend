// src/utils/api.js

// 환경 변수에서 URL 가져오기 (없으면 기본값)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * 공통 fetch 래퍼 함수 (토큰 자동 포함 및 401 처리)
 */
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

    // 401 Unauthorized: 토큰 만료 또는 위조
    if (response.status === 401) {
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      window.location.href = "/login"; // 로그인 페이지로 강제 이동
      return null;
    }

    return response;
  } catch (error) {
    console.error("API 요청 중 네트워크 오류 발생:", error);
    throw error;
  }
};

/**
 * 사용자 정보 업데이트 (PUT)
 * @param {object} updateData - { gradeLevel, subjectPrimary 등 }
 */
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

/**
 * AI 문제 생성 요청 (POST)
 * @param {string} prompt - 사용자 입력 텍스트
 */
export const generateAiProblem = async (prompt) => {
  try {
    const response = await authFetch("/api/ai/generate", {
      method: "POST",
      body: JSON.stringify({ userPrompt: prompt }),
    });

    if (response && response.ok) {
      return await response.text(); // 또는 response.json() 상황에 맞춰
    }
    return "AI 응답을 받아오지 못했습니다.";
  } catch (error) {
    return "AI 서버 연결 오류가 발생했습니다.";
  }
};

// 로그인 요청 (토큰이 없으므로 일반 fetch 사용)
export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/api/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response;
};

// 회원가입 요청
export const registerUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response;
};