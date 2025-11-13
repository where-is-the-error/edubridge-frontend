import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; // 스타일링은 따로 Login.css로 분리할 수 있습니다.

const Login = () => {
  // 상태 관리
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 토글 기능
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 로그인 처리
  const handleLogin = (e) => {
    e.preventDefault();
    // 실제 로그인 로직 구현 부분 (예: API 호출)
    console.log('로그인 시도:', username, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>EDU BRIDGE</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
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
