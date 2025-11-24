// src/utils/api.js (새로 생성해야 할 파일)

const BASE_URL = "http://localhost:3000"; // 🚨 백엔드 실행 주소 확인

/**
 * 사용자의 추가 정보(학년/과목 등)를 백엔드에 업데이트합니다.
 * @param {object} updateData - 업데이트할 데이터 ({ gradeLevel?: string, subjectPrimary?: string })
 * @param {string} path - API 엔드포인트 경로 (기본값: /api/user/info)
 * @returns {Promise<boolean>} - 성공 여부
 */
export const updateUserInfo = async (updateData, path = "/api/user/info") => {
  const token = localStorage.getItem("accessToken");
  
  if (!token) {
    console.error("인증 토큰이 없습니다. 로그인 상태를 확인하세요.");
    return false;
  }
  
  const API_URL = `${BASE_URL}${path}`; 

  try {
    const response = await fetch(API_URL, {
      method: "PUT", // 사용자 정보 업데이트는 PUT/PATCH를 사용합니다.
      headers: {
        "Content-Type": "application/json",
        // 🔑 인증 토큰을 헤더에 포함합니다.
        "Authorization": `Bearer ${token}`, 
      },
      body: JSON.stringify(updateData),
    });

    if (response.ok) {
      return true; // 업데이트 성공
    } else {
      console.error(`정보 업데이트 실패. 서버 응답 코드: ${response.status}`);
      // 401 Unauthorized 에러 등의 상세 정보 확인
      const errorBody = await response.text();
      console.error("서버 에러 본문:", errorBody);
      return false; 
    }
  } catch (error) {
    console.error("정보 업데이트 중 네트워크 오류:", error);
    return false;
  }
};