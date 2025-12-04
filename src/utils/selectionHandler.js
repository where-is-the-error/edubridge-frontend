// src/utils/selectionHandler.js
import { saveUserData } from "./userStorage";
import { updateUserInfo } from "./api";

/**
 * 모든 선택 과정을 처리하는 중앙 함수
 * @param {string} key - 저장할 키 (예: 'grade', 'subject', 'track')
 * @param {string} value - 저장할 값 (예: '1', 'math', 'science')
 * @param {function} navigate - 페이지 이동을 위한 navigate 함수
 * @param {string} nextPath - 이동할 경로 (예: '/mainpage')
 */
export const handleSelection = async (key, value, navigate, nextPath) => {
  try {
    // 1. 로컬 스토리지 저장
    saveUserData(key, value);

    // 2. DB 전송을 위한 데이터 변환 (이곳에서 필드명 관리!)
    let dbPayload = {};

    switch (key) {
      case "age":
        dbPayload = { gradeLevel: value };
        break;
      case "grade":
        // 학년은 숫자로 변환해서 전송
        dbPayload = { gradeNumber: parseInt(value, 10) };
        break;
      case "track":
        // 문과/이과
        dbPayload = { track: value };
        break;
      case "subject":
        // 국/영/수 등 일반 과목
        dbPayload = { subjectPrimary: value };
        break;
      case "scienceDetail":
        // 통합과학/실험탐구 등 세부 과목
        dbPayload = { subjectDetail: value };
        break;
      default:
        // 그 외(사회탐구, 과학탐구 세부 과목 등)도 일단 주 과목으로 처리
        dbPayload = { subjectPrimary: value };
        break;
    }

    // 3. 백엔드 DB 업데이트 (비동기)
    await updateUserInfo(dbPayload);
    console.log(`[선택 완료] ${key}: ${value} -> DB 저장 성공`);

  } catch (error) {
    console.error("DB 저장 중 오류 발생 (로컬 저장은 완료됨):", error);
  } finally {
    // 4. 성공하든 실패하든 다음 페이지로 이동 (사용자 경험 끊김 방지)
    if (nextPath) {
      navigate(nextPath);
    }
  }
};