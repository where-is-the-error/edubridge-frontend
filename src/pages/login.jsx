// src/pages/login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css"; // 스타일 파일 경로 확인 (대소문자 주의)

const Login = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 비밀번호 보기 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 로그인 처리 (API 연동 및 더미 데이터 처리)
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // 🌟 1. 더미 데이터 확인 (백엔드 없이 테스트할 때 사용)
    const DUMMY_EMAIL = "test@test.com";
    const DUMMY_PASSWORD = "1111";

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      console.log("임시 로그인 성공:", email);
      localStorage.setItem("accessToken", "DUMMY_TOKEN_FOR_TEST");
      
      // 🚀 수정됨: 로그인 성공 시 HomeAfter로 이동하여 추가 정보 확인 절차 진행
      navigate("/homeafter"); 
      return;
    }

    // 🌟 2. 실제 API 호출 로직
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
        // API 로그인 성공
        const data = await response.json();
        localStorage.setItem("accessToken", data.token);
        
        // 🚀 수정됨: 로그인 성공 시 HomeAfter로 이동
        navigate("/homeafter");

      } else if (response.status === 401) {
        // 401 Unauthorized
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");

      } else {
        // 그 외 에러 처리
        try {
          const errorData = await response.json();
          setError(errorData.message || `로그인 실패 (코드: ${response.status})`);
        } catch (e) {
          setError(`서버 응답 오류가 발생했습니다. (코드: ${response.status})`);
        }
      }
    } catch (err) {
      setError("서버에 연결할 수 없습니다. 백엔드 서버 상태를 확인하세요.");
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