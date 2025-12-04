import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AI.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger3 from "../assets/tiger3.png";

const AI = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [aiResponse, setAiResponse] = useState(""); // 결과 저장용 상태
  const [isLoading, setIsLoading] = useState(false);

  const goHomeAfter = () => navigate("/homeafter");

  // AI 문제 생성 요청 함수
  const handleGenerate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setAiResponse(""); // 기존 결과 초기화

    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch("http://localhost:3000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // 인증 토큰 필수
        },
        body: JSON.stringify({ userPrompt: inputText }),
      });

      if (response.ok) {
        const text = await response.text();
        setAiResponse(text); // 결과 화면에 표시
      } else {
        alert("AI 요청 실패: 로그인 상태를 확인해주세요.");
      }
    } catch (error) {
      console.error("AI 요청 중 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 엔터키 처리
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div className="AI-container">
      {/* 로고 */}
      <div className="AI-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} className="logo" alt="logo-dot" />
        <img src={logotext} className="logotext" alt="logo-text" />
      </div>

      {/* 중앙 제목 (결과가 없을 때만 표시하거나 유지) */}
      {!aiResponse && (
        <h1 className="AI-title">
          <span className="AI-strong">AI</span>
          <span className="AI-rest">의 맞춤 문제 제작</span>
        </h1>
      )}

      {/* 결과 표시 영역 (결과가 있으면 표시) */}
      {aiResponse && (
        <div className="ai-result-box" style={{ 
            position: 'absolute', top: '25vh', width: '60%', 
            padding: '20px', background: '#f0f8ff', borderRadius: '15px', 
            fontSize: '1.2rem', lineHeight: '1.6', whiteSpace: 'pre-wrap' 
        }}>
          <h3>🤖 AI 선생님의 답변:</h3>
          {aiResponse}
        </div>
      )}

      {/* 호랑이 이미지 (결과가 나오면 위치를 조정하거나 숨길 수 있음) */}
      <div className="AI-tiger-wrapper" style={{ opacity: aiResponse ? 0.2 : 1 }}>
        <img src={tiger3} className="tiger3-img" alt="tiger" />
      </div>

      {/* 입력창 */}
      <div className="AI-input-wrapper">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            className="AI-input"
            placeholder={isLoading ? "문제를 만드는 중입니다..." : "원하시는 문제를 입력해주세요 (예: 분수 덧셈)"}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button 
            onClick={handleGenerate} 
            disabled={isLoading}
            style={{
              padding: '0 20px', height: '6.5vh', borderRadius: '20px', 
              border: 'none', background: '#1C91FF', color: 'white', 
              fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer'
            }}
          >
            {isLoading ? "..." : "생성"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI;