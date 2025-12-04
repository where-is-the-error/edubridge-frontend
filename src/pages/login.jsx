// src/pages/login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"; 

const Login = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 1. 더미 데이터 확인 (백엔드 없을 때 테스트용)
    const DUMMY_EMAIL = "test@test.com";
    const DUMMY_PASSWORD = "1111";

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      console.log("임시 로그인 성공");
      localStorage.setItem("accessToken", "DUMMY_TOKEN");
      localStorage.setItem("userData", JSON.stringify({ nickname: "테스트유저", grade: 3, subject: "math" })); // 더미 데이터 저장
      navigate("/homeafter");
      return;
    }

    // 2. 실제 API 호출
    const API_URL = "http://localhost:3000/api/auth/signin";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // 성공 시 응답 데이터 받기
        const data = await response.json();
        
        // (1) 토큰 저장
        localStorage.setItem("accessToken", data.token);

        // (2) 🌟 사용자 정보 매핑 및 저장 (핵심!)
        // 백엔드 필드명을 프론트엔드에서 사용하는 키로 변환하여 저장합니다.
        const userData = {
          nickname: data.nickname,
          age: data.gradeLevel,         // 예: elementary
          grade: data.gradeNumber,      // 예: 3
          subject: data.subjectPrimary, // 예: math
          scienceDetail: data.subjectDetail,
          track: data.track
        };
        
        // 객체를 문자열로 변환하여 저장
        localStorage.setItem("userData", JSON.stringify(userData));
        
        // (3) 페이지 이동
        navigate("/homeafter");

      } else if (response.status === 401) {
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.message || `로그인 실패 (코드: ${response.status})`);
      }
    } catch (err) {
      setError("서버에 연결할 수 없습니다.");
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>EDU BRIDGE</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              👁
            </span>
          </div>

          {error && <p className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <button type="submit" className="login-btn">로그인</button>
        </form>

        <button className="google-login-btn">Google 계정으로 계속하기</button>
        <Link to="/signup" className="signup-link">회원가입 하기</Link>
      </div>
    </div>
  );
};

export default Login;