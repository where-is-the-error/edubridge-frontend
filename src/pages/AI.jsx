import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AI.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tiger3 from "../assets/tiger3.png"; // 윙크하는 호랑이
import userIcon from "../assets/icon.png"; // 유저 아이콘 (필요시 추가)
import { generateAiProblem } from "../utils/api";

const AI = () => {
  const navigate = useNavigate();
  const goHomeAfter = () => navigate("/homeafter");
  const messagesEndRef = useRef(null); // 스크롤 자동 이동용

  // 대화 기록 상태 (초기값: 호랑이의 첫 인사)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "안녕! 나는 너만의 AI 선생님 코니야.\n어떤 공부를 도와줄까? 원하시는 문제를 편하게 말해줘!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 새 메시지가 오면 스크롤을 맨 아래로
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // 1. 사용자 메시지 추가
    const userMsg = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. AI 응답 요청
      const aiResponse = await generateAiProblem(userMsg.text);
      
      // 3. AI 메시지 추가
      const aiMsg = { 
        id: Date.now() + 1, 
        sender: "ai", 
        text: aiResponse 
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg = { 
        id: Date.now() + 1, 
        sender: "ai", 
        text: "미안해, 지금은 연결이 조금 불안정해서 답장을 쓸 수가 없어 ㅠㅠ 잠시 후에 다시 말해줄래?" 
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-page-background">
      {/* 상단 로고 (편지지 밖) */}
      <div className="ai-logo-group" onClick={goHomeAfter}>
        <img src={logo} className="ai-logo-img" alt="logo" />
        <img src={logotext} className="ai-logo-text" alt="text" />
      </div>

      {/* 📜 편지지 컨테이너 */}
      <div className="letter-paper">
        
        {/* 편지 헤더 (호랑이 + 제목) */}
        <div className="letter-header">
          <img src={tiger3} alt="Teacher Tiger" className="header-tiger" />
          <div className="header-text">
            <h1 className="letter-title">From. 코니</h1>
            <p className="letter-subtitle">To. 열공하는 너에게</p>
          </div>
          <div className="stamp">EduBridge</div>
        </div>

        {/* 편지 내용 (대화 영역) */}
        <div className="letter-content">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender}`}>
              <div className="message-sender-icon">
                <img 
                  src={msg.sender === 'ai' ? tiger3 : userIcon} 
                  alt={msg.sender} 
                />
              </div>
              <div className="message-text">
                {/* 줄바꿈 처리 */}
                {msg.text.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
          
          {/* 로딩 표시 */}
          {isLoading && (
            <div className="message-row ai">
              <div className="message-sender-icon"><img src={tiger3} alt="ai" /></div>
              <div className="message-text loading">
                <span>.</span><span>.</span><span>.</span>
                <p style={{fontSize:'0.8rem', color:'#888', marginTop:'5px'}}>열심히 문제를 만들고 있어!</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* 편지 쓰기 (입력 영역) */}
        <div className="letter-footer">
          <div className="input-line-wrapper">
            <textarea
              className="letter-input"
              placeholder="코니에게 하고싶은 말을 적어줘~"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              rows={1}
            />
            <button className="send-btn" onClick={handleSend} disabled={isLoading}>
              보내기 📮
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AI;