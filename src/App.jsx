import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import MainPage from "./pages/mainpage";
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
import TimeTable from "./pages/timetable";
import DaySelect from "./components/DaySelect";
import SchoolLevelSelect from "./components/SchoolLevelSelect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homeafter" element={<HomeAfter />} />
        <Route path="/age" element={<Age />}/>
        <Route path="/ele" element={<Ele />}/>
        <Route path="/elegrade" element={<Elegrade />}/>
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
        <Route path="/highscience1" element={<HighScience1 />}/>
        <Route path="/highsociety2_1" element={<HighSociety2_1 />} />
        <Route path="/mainpage" element={<MainPage />}/>
        <Route path="/ai" element={<Ai />}/>
        <Route path="/history2" element={<History2/>}/>
        <Route path="/geography" element={<Geography/>}/>
        <Route path="/morality" element={<Morality/>}/>
        <Route path="/highscience2_1" element={<HighScience2_1/>}/>
        <Route path="/highsociety3_1" element={<HighSociety3_1/>}/>
        <Route path="/history3" element={<History3/>}/>
        <Route path="/geography3" element={<Geography3/>}/>
        <Route path="/morality3" element={<Morality3/>}/>
        <Route path="/highscience3_1" element={<HighScience3_1/>}/>
        <Route path="/timetable" element={<TimeTable />}/>
        <Route path="/dayselect" element={<DaySelect />}/>
        <Route path="/schoollevelselect" element={<SchoolLevelSelect />}/>
      </Routes>
    </Router>
  );
}

export default App;
