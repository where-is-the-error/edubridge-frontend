import React, { useState } from "react";
import "../styles/AI.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger3 from "../assets/tiger3.png";
import { useNavigate } from "react-router-dom";
import { generateAiProblem } from "../utils/api"; // api.js 함수 사용

const AI = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  // 입력값과 결과 상태 관리
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async (e) => {
    // 엔터키 또는 버튼 이벤트 처리
    if (e.key === "Enter" || e.type === "click") {
      if (!prompt.trim()) return;

      setIsLoading(true);
      setResult(""); // 이전 결과 초기화

      const aiResponse = await generateAiProblem(prompt);
      
      setResult(aiResponse);
      setIsLoading(false);
    }
  };

  return (
    <div className="AI-container">
      {/* 로고 */}
      <div className="AI-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} className="logo" alt="logo-dot" />
        <img src={logotext} className="logotext" alt="logo-text" />
      </div>

      {/* 결과가 없을 때만 타이틀 표시 (선택사항) */}
      {!result && (
        <h1 className="AI-title">
          <span className="AI-strong">AI</span>
          <span className="AI-rest">의 맞춤 문제 제작</span>
        </h1>
      )}

      {/* 결과 표시 영역 (결과가 있을 때만 표시) */}
      {result && (
        <div className="AI-result-box" style={{ 
            position: 'absolute', 
            top: '20vh', 
            width: '60vw', 
            maxHeight: '50vh', 
            overflowY: 'auto',
            padding: '20px',
            background: '#f0f8ff',
            borderRadius: '15px',
            whiteSpace: 'pre-wrap' // 줄바꿈 보존
        }}>
          {result}
        </div>
      )}

      {/* 호랑이 이미지 */}
      <div className="AI-tiger-wrapper">
        <img src={tiger3} className="tiger3-img" alt="tiger" />
      </div>

      {/* 입력창 */}
      <div className="AI-input-wrapper">
        <input
          className="AI-input"
          placeholder={isLoading ? "AI가 생각 중입니다..." : "원하시는 문제를 입력해주세요"}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleGenerate}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default AI;