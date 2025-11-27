// ...existing code...
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
 // ...existing code...

import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import HomeAfter from "./pages/HomeAfter";
import Age from "./pages/age";
import Ele from "./pages/ele";
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
import Ai from "./pages/AI";

import MainPage from "./pages/mainpage";
import MainPage1 from "./pages/mainpage1";

import NextScreen from "./components/NextScreen";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homeafter" element={<HomeAfter />} />
        <Route path="/age" element={<Age />} />
        <Route path="/ele" element={<Ele />} />
        <Route path="/middle" element={<Middle />} />
        <Route path="/high" element={<High />} />
        <Route path="/middlesub" element={<MiddleSub />} />
        <Route path="/highgrade1" element={<HighGrade1 />} />
        <Route path="/highsub2" element={<HighSub2 />} />
        <Route path="/highsociety2" element={<HighSociety2 />} />
        <Route path="/highscience2" element={<HighScience2 />} />
        <Route path="/highsub3" element={<HighSub3 />} />
        <Route path="/highsociety3" element={<HighSociety3 />} />
        <Route path="/highscience3" element={<HighScience3 />} />
        <Route path="/highscience1" element={<HighScience1 />} />
        <Route path="/mainpage" element={<MainPage />} />
+       <Route path="/mainpage1" element={<MainPage1 />} />
        <Route path="/ai" element={<Ai />} />

        {/* components/NextScreen을 사용하려면 아래 경로 유지 */}
        <Route path="/next" element={<NextScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
// ...existing code...