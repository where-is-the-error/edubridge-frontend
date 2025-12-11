import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "../../styles/MainPage/Home.css";
import { fetchUserInfo, getCrawledData } from "../../utils/api";

const Main = () => {
  const [user, setUser] = useState(null);
  const [crawledData, setCrawledData] = useState([]);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // 📝 메모 상태 관리 (초기값은 로컬 스토리지에서 불러옴)
  const [memos, setMemos] = useState(() => {
    const saved = localStorage.getItem("deskMemos");
    return saved ? JSON.parse(saved) : [
      // 초기 샘플 메모 (없으면 보여줌)
      { id: 1, x: 100, y: 150, text: "오늘의 할 일:\n- 수학 문제 풀기 📘\n- 코니랑 대화하기 🐯", color: "yellow", rotate: -2 },
      { id: 2, x: 1100, y: 200, text: "EduBridge 화이팅! 🚀", color: "pink", rotate: 3 },
    ];
  });

  // 메모 변경 시 로컬 스토리지 저장
  useEffect(() => {
    localStorage.setItem("deskMemos", JSON.stringify(memos));
  }, [memos]);

  // 초기 데이터 로드 (기존 코드)
  useEffect(() => {
    const init = async () => {
      try {
        const userData = await fetchUserInfo();
        setUser(userData ? {
          nickname: userData.nickname,
          age: userData.gradeLevel,
          grade: userData.gradeNumber,
          subject: userData.subjectPrimary,
          scienceDetail: userData.subjectDetail,
          track: userData.track
        } : { nickname: "게스트" });
      } catch (e) { setUser({ nickname: "게스트" }); }

      try {
        const result = await getCrawledData();
        setCrawledData(result || []);
      } catch (e) { console.error(e); }
    };
    init();
    setTimeout(() => setIsNavVisible(true), 1000);
  }, []);

  // ➕ 메모 추가 핸들러
  const addMemo = () => {
    const colors = ["yellow", "pink", "blue", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotate = Math.floor(Math.random() * 10) - 5; // -5 ~ 5도 회전

    const newMemo = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 300) + 50, // 화면 안쪽 랜덤 위치
      y: Math.random() * (window.innerHeight - 300) + 100,
      text: "",
      color: randomColor,
      rotate: randomRotate,
    };
    setMemos([...memos, newMemo]);
  };

  // ❌ 메모 삭제 핸들러
  const deleteMemo = (id) => {
    setMemos(memos.filter(memo => memo.id !== id));
  };

  // ✏️ 메모 내용 수정 핸들러
  const updateMemoText = (id, newText) => {
    setMemos(memos.map(memo => memo.id === id ? { ...memo, text: newText } : memo));
  };

  // 🖱️ 드래그 앤 드롭 구현
  const [dragInfo, setDragInfo] = useState({ isDragging: false, targetId: null, startX: 0, startY: 0 });

  const handleMouseDown = (e, id) => {
    // 텍스트 영역이나 삭제 버튼 클릭 시 드래그 방지
    if (e.target.className.includes("note-textarea") || e.target.className.includes("delete-btn")) return;
    
    setDragInfo({
      isDragging: true,
      targetId: id,
      startX: e.clientX,
      startY: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragInfo.isDragging) return;

    const deltaX = e.clientX - dragInfo.startX;
    const deltaY = e.clientY - dragInfo.startY;

    setMemos(memos.map(memo => {
      if (memo.id === dragInfo.targetId) {
        return { ...memo, x: memo.x + deltaX, y: memo.y + deltaY };
      }
      return memo;
    }));

    setDragInfo({ ...dragInfo, startX: e.clientX, startY: e.clientY });
  };

  const handleMouseUp = () => {
    setDragInfo({ ...dragInfo, isDragging: false, targetId: null });
  };

  return (
    <div 
      className="home" 
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp}
    > 
      <Navbar user={user} isVisible={isNavVisible} />

      {/* 📌 메모들이 놓이는 배경 레이어 */}
      <div className="memo-container">
        {memos.map((memo) => (
          <div
            key={memo.id}
            className={`sticky-note ${memo.color}`}
            style={{
              left: memo.x,
              top: memo.y,
              transform: `rotate(${memo.rotate}deg)`,
              zIndex: dragInfo.targetId === memo.id ? 100 : 1, // 드래그 중인 메모를 맨 위로
            }}
            onMouseDown={(e) => handleMouseDown(e, memo.id)}
          >
            <div className="note-header">
              <button className="delete-btn" onClick={() => deleteMemo(memo.id)}>✕</button>
            </div>
            <textarea
              className="note-textarea"
              value={memo.text}
              onChange={(e) => updateMemoText(memo.id, e.target.value)}
              placeholder="메모를 입력하세요..."
            />
          </div>
        ))}
      </div>

      {/* 📖 메인 콘텐츠 (책) */}
      <div className="main-content-wrapper">
        <Carousel data={crawledData} user={user} />
      </div>

      {/* ➕ 메모 추가 버튼 */}
      <button className="add-memo-btn" onClick={addMemo} title="새 메모 추가">
        +
      </button>
    </div>
  );
};

export default Main;