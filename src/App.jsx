import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// 컴포넌트 임포트
import PrivateRoute from "./components/PrivateRoute";
import PageTransition from "./components/PageTransition"; // ⭐️ 애니메이션 컴포넌트

import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import HomeAfter from "./pages/HomeAfter";
import Age from "./pages/age";
import Ele from "./pages/ele";
import Elegrade from "./pages/elegrade";
import Middle from "./pages/middle";
import High from "./pages/high";
import MiddleSub from "./pages/middlesub";
import HighGrade1 from "./pages/highgrade1";
import HighSub2 from "./pages/highsub2";
import HighSociety2 from "./pages/highsociety2";
import HighScience2 from "./pages/highscience2";
import HighSub3 from "./pages/highsub3";
import HighSociety3 from "./pages/highsociety3";
import HighScience3 from "./pages/highscience3";
import HighScience1 from "./pages/highscience1";
import HighSociety2_1 from "./pages/highsociety2_1";
import Profile from "./pages/Profile";
import Ai from "./pages/AI";
import History2 from "./pages/history2";
import Geography from "./pages/geography";
import Morality from "./pages/morality";
import HighScience2_1 from "./pages/highscience2_1";
import HighSociety3_1 from "./pages/highsociety3_1";
import History3 from "./pages/history3";
import Geography3 from "./pages/geography3";
import Morality3 from "./pages/morality3";
import HighScience3_1 from "./pages/highscience3_1";
import MainPage from "./pages/MainPage/Main";
import TimeTable from "./pages/timetable";
import DaySelect from "./components/DaySelect";
import SchoolLevelSelect from "./components/SchoolLevelSelect";
import Memos from "./pages/Memos";


// ⭐️ 라우트 설정을 별도 컴포넌트로 분리 (useLocation 사용을 위해)
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait": 이전 페이지가 사라진 후 다음 페이지가 나타남
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* ✅ 공개 페이지 */}
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><SignUp /></PageTransition>} />
        
        {/* 🔒 비공개 페이지 (PrivateRoute + PageTransition) */}
        <Route path="/homeafter" element={
          <PrivateRoute><PageTransition><HomeAfter /></PageTransition></PrivateRoute>
        } />
        <Route path="/mainpage" element={
          <PrivateRoute><PageTransition><MainPage /></PageTransition></PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute><PageTransition><Profile /></PageTransition></PrivateRoute>
        } />
        <Route path="/ai" element={
          <PrivateRoute><PageTransition><Ai /></PageTransition></PrivateRoute>
        } />
        <Route path="/timetable" element={
          <PrivateRoute><PageTransition><TimeTable /></PageTransition></PrivateRoute>
        } />
        <Route path="/memos" element={
          <PrivateRoute><PageTransition><Memos /></PageTransition></PrivateRoute>
        } />
        
        {/* 선택 페이지들 */}
        <Route path="/age" element={
          <PrivateRoute><PageTransition><Age /></PageTransition></PrivateRoute>
        } />
        <Route path="/ele" element={
          <PrivateRoute><PageTransition><Ele /></PageTransition></PrivateRoute>
        } />
        <Route path="/elegrade" element={
          <PrivateRoute><PageTransition><Elegrade /></PageTransition></PrivateRoute>
        } />
        <Route path="/middle" element={
          <PrivateRoute><PageTransition><Middle /></PageTransition></PrivateRoute>
        } />
        <Route path="/high" element={
          <PrivateRoute><PageTransition><High /></PageTransition></PrivateRoute>
        } />
        <Route path="/middlesub" element={
          <PrivateRoute><PageTransition><MiddleSub /></PageTransition></PrivateRoute>
        } />
        <Route path="/highgrade1" element={
          <PrivateRoute><PageTransition><HighGrade1 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highsub2" element={
          <PrivateRoute><PageTransition><HighSub2 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highsub3" element={
          <PrivateRoute><PageTransition><HighSub3 /></PageTransition></PrivateRoute>
        } />
        
        {/* 고등 세부 과목 선택 */}
        <Route path="/highsociety2" element={
          <PrivateRoute><PageTransition><HighSociety2 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highscience2" element={
          <PrivateRoute><PageTransition><HighScience2 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highsociety3" element={
          <PrivateRoute><PageTransition><HighSociety3 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highscience3" element={
          <PrivateRoute><PageTransition><HighScience3 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highscience1" element={
          <PrivateRoute><PageTransition><HighScience1 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highsociety2_1" element={
          <PrivateRoute><PageTransition><HighSociety2_1 /></PageTransition></PrivateRoute>
        } />
        <Route path="/history2" element={
          <PrivateRoute><PageTransition><History2 /></PageTransition></PrivateRoute>
        } />
        <Route path="/geography" element={
          <PrivateRoute><PageTransition><Geography /></PageTransition></PrivateRoute>
        } />
        <Route path="/morality" element={
          <PrivateRoute><PageTransition><Morality /></PageTransition></PrivateRoute>
        } />
        <Route path="/highscience2_1" element={
          <PrivateRoute><PageTransition><HighScience2_1 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highsociety3_1" element={
          <PrivateRoute><PageTransition><HighSociety3_1 /></PageTransition></PrivateRoute>
        } />
        <Route path="/history3" element={
          <PrivateRoute><PageTransition><History3 /></PageTransition></PrivateRoute>
        } />
        <Route path="/geography3" element={
          <PrivateRoute><PageTransition><Geography3 /></PageTransition></PrivateRoute>
        } />
        <Route path="/morality3" element={
          <PrivateRoute><PageTransition><Morality3 /></PageTransition></PrivateRoute>
        } />
        <Route path="/highscience3_1" element={
          <PrivateRoute><PageTransition><HighScience3_1 /></PageTransition></PrivateRoute>
        } />

        {/* 컴포넌트 테스트용 */}
        <Route path="/dayselect" element={<DaySelect />} />
        <Route path="/schoollevelselect" element={<SchoolLevelSelect />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;