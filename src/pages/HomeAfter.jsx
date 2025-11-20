import React, { useEffect } from "react"; // 👈 useEffect import 추가
import { useNavigate } from "react-router-dom";
import "../styles/HomeAfter.css";
import tiger2 from "../assets/tiger2.png";

const HomeAfter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. localStorage에서 인증 토큰 및 학년 정보 가져오기
    const accessToken = localStorage.getItem("accessToken");
    // 💡 학년 정보가 'gradeLevel' 키로 저장되었다고 가정합니다.
    const gradeLevel = localStorage.getItem("gradeLevel"); 

    // 🚨 1단계: 로그인이 안 되어 있을 때 (accessToken이 없을 때)
    if (!accessToken) {
      alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
      navigate("/login");
      return; // 리다이렉트 후 함수 종료
    }

    // 🚨 2단계: 로그인이 되어 있고, 학년 정보(gradeLevel)가 있을 때
    if (accessToken && gradeLevel) {
      // 바로 MainPage로 이동
      navigate("/mainpage");
      return; // 리다이렉트 후 함수 종료
    }
    
    // 🚨 3단계: 로그인은 되어 있지만, 학년 정보(gradeLevel)가 없을 때
    if (accessToken && !gradeLevel) {
      // age 선택 페이지로 이동하여 학년 정보를 설정하도록 유도
      navigate("/age");
      return; // 리다이렉트 후 함수 종료
    }

    // 만약 위의 조건에 모두 해당하지 않는 경우 (예: 로직 오류 방지), 
    // 페이지를 잠시 보여준 후 수동 이동을 기다리거나 기본 페이지로 이동할 수 있습니다.
    // 여기서는 기본적으로 렌더링을 유지하며, 자동 리다이렉트가 실패했을 때 
    // 사용자가 버튼을 눌러 이동할 수 있도록 합니다.

  }, [navigate]); // navigate 함수가 변경될 일은 없지만, ESLint 권장 사항에 따라 추가

  return (
    <div className="after-container">

      {/* 로고 */}
      <div className="after-logo">
        <div className="after-logo-dot"></div>
        <h1 className="after-logo-text">EDU BRIDGE</h1>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="after-content">

        <div className="after-text-area">
          <h2 className="after-title">학습중개사이트</h2>

          {/* 💡 참고: 자동 리다이렉트 로직이 성공적으로 동작하면 
            아래 버튼들은 거의 보이지 않고 바로 페이지가 이동됩니다. 
            자동 리다이렉트가 실패했을 경우에만 사용자에게 보입니다.
          */}
          <div className="after-btn-group">
            <button
              className="after-btn-continue"
              onClick={() => navigate("/mainpage")}
            >
              Continue!
            </button>

            <button
              className="after-btn-change"
              onClick={() => {
                 // 계정 변경 시 토큰 삭제 후 로그인 페이지로 이동
                 localStorage.removeItem("accessToken");
                 navigate("/login");
              }}
            >
              계정 변경하기
            </button>
          </div>
        </div>

        <img src={tiger2} alt="tiger2" className="after-tiger" />
      </div>
    </div>
  );
};

export default HomeAfter;