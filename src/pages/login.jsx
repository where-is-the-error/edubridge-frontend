import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { loginUser } from "../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUser(email, password);

      if (response.ok) {
        const data = await response.json();
        
        // (1) 토큰만 저장 (필수)
        localStorage.setItem("accessToken", data.token);

        // 🚨 사용자 정보 로컬 저장 로직 제거 (DB에서 매번 불러오도록 변경)
        // localStorage.setItem("userData", ... ); 

        navigate("/homeafter");
      } else if (response.status === 401) {
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.message || `로그인 실패 (코드: ${response.status})`);
      }
    } catch (err) {
      setError("서버에 연결할 수 없습니다.");
    }
  };

  return (
    // ... (기존 JSX UI 코드 그대로 유지) ...
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