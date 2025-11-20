import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [email, setEmail] = useState(""); // username 대신 email 사용
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 비밀번호 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 로그인 처리(API 연동)
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

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
        const data = await response.json();
        localStorage.setItem("accessToken", data.token);
        navigate("/age"); // 로그인 성공 → 연령 선택 페이지로 이동
      } else {
        const errorData = await response.json();
        setError(errorData.message || "이메일 또는 비밀번호를 확인해주세요.");
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
          {/* 이메일 입력 */}
          <div className="input-group">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* 비밀번호 입력 */}
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

          {/* 에러 메시지 */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">로그인</button>
        </form>

        <button className="google-login-btn">Google 계정으로 계속하기</button>
        <Link to="/signup" className="signup-link">회원가입 하기</Link>
      </div>
    </div>
  );
};

export default Login;
