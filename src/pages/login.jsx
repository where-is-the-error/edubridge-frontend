import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 보기 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 로그인 처리 (API 없이 바로 이동)
  const handleLogin = (e) => {
    e.preventDefault();

    // ★ API 없이 바로 로그인 처리
    console.log("임시 로그인 성공:", email);

    // 로그인했다고 가정 → 다음 페이지로 이동
    navigate("/age");
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

          <button type="submit" className="login-btn">로그인</button>
        </form>

        <button className="google-login-btn">Google 계정으로 계속하기</button>
        <Link to="/signup" className="signup-link">회원가입 하기</Link>
      </div>
    </div>
  );
};

export default Login;
