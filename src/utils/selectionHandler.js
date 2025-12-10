// src/utils/selectionHandler.js
import { updateUserInfo } from "./api";

/**
 * 모든 선택 과정을 처리하는 중앙 함수 (DB 저장 전용)
 */
export const handleSelection = async (key, value, navigate, nextPath) => {
  try {
    // 🚨 로컬 스토리지 저장(saveUserData) 제거됨. DB로만 전송.

    // DB 전송을 위한 데이터 변환
    let dbPayload = {};

    switch (key) {
      case "age":
        dbPayload = { gradeLevel: value };
        break;
      case "grade":
        dbPayload = { gradeNumber: parseInt(value, 10) };
        break;
      case "track":
        dbPayload = { track: value };
        break;
      case "subject":
        dbPayload = { subjectPrimary: value };
        break;
      case "scienceDetail":
        dbPayload = { subjectDetail: value };
        break;
      default:
        dbPayload = { subjectPrimary: value };
        break;
    }

    // 백엔드 DB 업데이트 (비동기 대기)
    const success = await updateUserInfo(dbPayload);
    
    if (success) {
      console.log(`[DB 저장 성공] ${key}: ${value}`);
    } else {
      console.warn(`[DB 저장 실패] ${key}: ${value}`);
    }

  } catch (error) {
    console.error("DB 저장 중 치명적 오류:", error);
  } finally {
    // 다음 페이지로 이동
    if (nextPath) {
      navigate(nextPath);
    }
  }
};