import React, { useState } from "react";
import "../../styles/mainpage/Navbar.css";

const Navbar = () => {
  const [showGrade, setShowGrade] = useState(false);
  const [showSubject, setShowSubject] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="logo">EduBridge</li>

        <li
          onMouseEnter={() => setShowGrade(true)}
          onMouseLeave={() => setShowGrade(false)}
        >
          초등학생
          {showGrade && (
            <div className="dropdown grade-dropdown">
              <p>1학년</p>
              <p>2학년</p>
              <p>3학년</p>
              <p>4학년</p>
              <p>5학년</p>
              <p>6학년</p>
            </div>
          )}
        </li>

        <li>중학생</li>
        <li>고등학생</li>
        <li
          onMouseEnter={() => setShowSubject(true)}
          onMouseLeave={() => setShowSubject(false)}
        >
          과목
          {showSubject && (
            <div className="dropdown subject-dropdown">
              <p>국어</p>
              <p>수학</p>
              <p>영어</p>
              <p>사회</p>
              <p>과학</p>
            </div>
          )}
        </li>
        <li>AI</li>

        <li className="profile">홍길동님</li>
      </ul>
    </nav>
  );
};

export default Navbar;
