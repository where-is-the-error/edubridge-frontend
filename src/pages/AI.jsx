import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AI.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger3 from "../assets/tiger3.png";
import { generateAiProblem } from "../utils/api";

const AI = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");

  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async (e) => {
    // 엔터키 또는 버튼 클릭 시 실행
    if (e.key === "Enter" || e.type === "click") {
      if (!prompt.trim()) return;

      setIsLoading(true);
      setResult(""); // 이전 결과 초기화

      // api.js의 함수 사용 (환경변수/토큰 처리 자동)
      const aiResponse = await generateAiProblem(prompt);
      
      setResult(aiResponse);
      setIsLoading(false);
    }
  };

  return (
    <div className="AI-container">
      <div className="AI-logo" onClick={goHomeAfter} style={{ cursor: "pointer" }}>
        <img src={logo} className="logo" alt="logo-dot" />
        <img src={logotext} className="logotext" alt="logo-text" />
      </div>

      {!result && (
        <h1 className="AI-title">
          <span className="AI-strong">AI</span>
          <span className="AI-rest">의 맞춤 문제 제작</span>
        </h1>
      )}

      {/* 결과 표시 영역 */}
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
            whiteSpace: 'pre-wrap',
            zIndex: 10
        }}>
          {result}
        </div>
      )}

      <div className="AI-tiger-wrapper">
        <img src={tiger3} className="tiger3-img" alt="tiger" />
      </div>

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