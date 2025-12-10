import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
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

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ 누구나 접근 가능한 공개 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 🔒 로그인이 필요한 비공개 페이지 (PrivateRoute로 감싸기) */}
        <Route path="/homeafter" element={<PrivateRoute><HomeAfter /></PrivateRoute>} />
        <Route path="/mainpage" element={<PrivateRoute><MainPage /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/ai" element={<PrivateRoute><Ai /></PrivateRoute>} />
        <Route path="/timetable" element={<PrivateRoute><TimeTable /></PrivateRoute>} />
        
        {/* 선택 페이지들 */}
        <Route path="/age" element={<PrivateRoute><Age /></PrivateRoute>} />
        <Route path="/ele" element={<PrivateRoute><Ele /></PrivateRoute>} />
        <Route path="/elegrade" element={<PrivateRoute><Elegrade /></PrivateRoute>} />
        <Route path="/middle" element={<PrivateRoute><Middle /></PrivateRoute>} />
        <Route path="/high" element={<PrivateRoute><High /></PrivateRoute>} />
        <Route path="/middlesub" element={<PrivateRoute><MiddleSub /></PrivateRoute>} />
        <Route path="/highgrade1" element={<PrivateRoute><HighGrade1 /></PrivateRoute>} />
        <Route path="/highsub2" element={<PrivateRoute><HighSub2 /></PrivateRoute>} />
        <Route path="/highsub3" element={<PrivateRoute><HighSub3 /></PrivateRoute>} />
        
        {/* 고등 세부 과목 선택 */}
        <Route path="/highsociety2" element={<PrivateRoute><HighSociety2 /></PrivateRoute>} />
        <Route path="/highscience2" element={<PrivateRoute><HighScience2 /></PrivateRoute>} />
        <Route path="/highsociety3" element={<PrivateRoute><HighSociety3 /></PrivateRoute>} />
        <Route path="/highscience3" element={<PrivateRoute><HighScience3 /></PrivateRoute>} />
        <Route path="/highscience1" element={<PrivateRoute><HighScience1 /></PrivateRoute>} />
        <Route path="/highsociety2_1" element={<PrivateRoute><HighSociety2_1 /></PrivateRoute>} />
        <Route path="/history2" element={<PrivateRoute><History2 /></PrivateRoute>} />
        <Route path="/geography" element={<PrivateRoute><Geography /></PrivateRoute>} />
        <Route path="/morality" element={<PrivateRoute><Morality /></PrivateRoute>} />
        <Route path="/highscience2_1" element={<PrivateRoute><HighScience2_1 /></PrivateRoute>} />
        <Route path="/highsociety3_1" element={<PrivateRoute><HighSociety3_1 /></PrivateRoute>} />
        <Route path="/history3" element={<PrivateRoute><History3 /></PrivateRoute>} />
        <Route path="/geography3" element={<PrivateRoute><Geography3 /></PrivateRoute>} />
        <Route path="/morality3" element={<PrivateRoute><Morality3 /></PrivateRoute>} />
        <Route path="/highscience3_1" element={<PrivateRoute><HighScience3_1 /></PrivateRoute>} />

        {/* 컴포넌트 테스트용 라우트 (필요하다면 유지, 아니면 제거) */}
        <Route path="/dayselect" element={<DaySelect />} />
        <Route path="/schoollevelselect" element={<SchoolLevelSelect />} />
      </Routes>
    </Router>
  );
}

export default App;