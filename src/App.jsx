import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import HomeAfter from "./pages/HomeAfter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeafter" element={<HomeAfter />} />
      </Routes>
    </Router>
  );
}

export default App;
