// src/components/HomeScreen.js
import React from 'react';
import StartButton from './StartButton';  // 시작 버튼 컴포넌트
import TigerIcon from './TigerIcon.js';      // 호랑이 아이콘 컴포넌트


const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1>EDU BRIDGE</h1>
      <div className="content">
        <h2>학습중개사이트</h2>
        <p>지금 이곳에서 새로운 배움을 이어보세요</p>
        <StartButton />
      </div>
      <TigerIcon />
    </div>
  );
};

export default HomeScreen;
