import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login";
import HomeAfter from "./pages/home/HomeAfter";
import Age from "./pages/age/age";
import Ele from "./pages/elementary/ele";
import Middle from "./pages/middle/middle";
import High from "./pages/highschool/high";
import MiddleSub from "./pages/middle/middlesub";
import HighGrade1 from "./pages/high1/highgrade1";
import HighSub2 from "./pages/high2/highsub2";
import HighSociety2 from "./pages/high2/highsociety2";
import HighScience2 from "./pages/high2/highscience2";
import HighSub3 from "./pages/high3/highsub3";
import HighSociety3 from "./pages/high3/highsociety3";
import HighScience3 from "./pages/high3/highscience3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeafter" element={<HomeAfter />} />
        <Route path="/age" element={<Age />}/>
        <Route path="/ele" element={<Ele />}/>
        <Route path="/middle" element={<Middle />}/>
        <Route path="/high" element={<High />}/>
        <Route path="/middlesub" element={<MiddleSub />}/>
        <Route path="/highgrade1" element={<HighGrade1 />}/>
        <Route path="/highsub2" element={<HighSub2 />}/>
        <Route path="/highsociety2" element={<HighSociety2 />}/>
        <Route path="/highscience2" element={<HighScience2 />}/>
        <Route path="/highsub3" element={<HighSub3 />}/>
        <Route path="/highsociety3" element={<HighSociety3 />}/>
        <Route path="/highscience3" element={<HighScience3 />}/>
      </Routes>
    </Router>
  );
}

export default App;
