import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import { loginUser } from "../utils/api"; // api.js의 loginUser 함수 사용

const Login = () => {
  const navigate = useNavigate();

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

    try {
      // api.js의 loginUser 함수 호출
      const response = await loginUser(email, password);

      if (response.ok) {
        const data = await response.json();
        // 토큰 및 사용자 정보 저장
        localStorage.setItem("accessToken", data.token);
        
        // 백엔드에서 보내주는 사용자 기본 정보를 로컬 스토리지 초기값으로 세팅
        const userData = {
            gradeLevel: data.gradeLevel,
            gradeNumber: data.gradeNumber,
            subject: data.subjectPrimary,
            // 필요한 필드 추가 매핑
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        navigate("/HomeAfter");
      } else if (response.status === 401) {
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.message || "로그인에 실패했습니다.");
      }
    } catch (err) {
      setError("서버에 연결할 수 없습니다.");
      console.error(err);
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