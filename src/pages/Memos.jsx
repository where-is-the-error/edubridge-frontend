import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Memos.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

const Memos = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1); // 뒤로가기

  // 로컬 스토리지에서 메모 불러오기 (Main.jsx와 데이터 공유)
  const [memos, setMemos] = useState(() => {
    const saved = localStorage.getItem("deskMemos");
    return saved ? JSON.parse(saved) : [];
  });

  // 변경 시 저장
  useEffect(() => {
    localStorage.setItem("deskMemos", JSON.stringify(memos));
  }, [memos]);

  // 메모 삭제
  const deleteMemo = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setMemos(memos.filter((memo) => memo.id !== id));
    }
  };

  // 메모 내용 수정
  const updateText = (id, text) => {
    setMemos(memos.map((m) => (m.id === id ? { ...m, text } : m)));
  };

  // 새 메모 추가 (그리드 빈 공간에)
  const addMemo = () => {
    const colors = ["yellow", "pink", "blue", "green"];
    const newMemo = {
      id: Date.now(),
      text: "",
      color: colors[Math.floor(Math.random() * colors.length)],
      // 위치는 자동 정렬되거나 초기값 0,0 (그리드라 CSS가 알아서 함)
      x: 0, y: 0, rotate: 0 
    };
    setMemos([...memos, newMemo]);
  };

  return (
    <div className="memos-page">
      {/* 상단 네비게이션 */}
      <div className="memos-header">
        <div className="logo-area" onClick={() => navigate("/mainpage")}>
          <img src={logo} alt="logo" className="small-logo" />
          <img src={logotext} alt="text" className="small-text" />
        </div>
        <button className="close-btn" onClick={goBack}>닫기 ✕</button>
      </div>

      <div className="memos-content">
        <h1 className="memos-title">내 메모 보관함 📝</h1>
        
        {/* ⭐️ 모눈종이 그리드 레이아웃 */}
        <div className="memos-grid">
          {memos.map((memo) => (
            <div key={memo.id} className={`memo-card ${memo.color}`}>
              {/* 상단 핀 장식 */}
              <div className="pin-deco"></div>
              
              <textarea
                className="memo-card-input"
                value={memo.text}
                onChange={(e) => updateText(memo.id, e.target.value)}
                placeholder="내용을 입력하세요..."
              />
              <div className="memo-actions">
                <button onClick={() => deleteMemo(memo.id)}>삭제</button>
              </div>
            </div>
          ))}
          
          {/* 추가 버튼 카드 */}
          <div className="memo-card add-card" onClick={addMemo}>
            <span className="plus-icon">+</span>
            <span>새 메모</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memos;