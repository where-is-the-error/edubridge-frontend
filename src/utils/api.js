// src/utils/api.js

const BASE_URL = "http://localhost:3000";

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
      window.location.href = "/login";
      return null;
    }

    return response;
  } catch (error) {
    console.error("API 요청 중 네트워크 오류 발생:", error);
    throw error;
  }
};

// ⭐️ [신규] 내 정보 가져오기 (DB 조회)
export const fetchUserInfo = async () => {
  try {
    const response = await authFetch("/api/user/info", {
      method: "GET",
    });
    if (response && response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    return null;
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