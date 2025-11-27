import React, { useState } from 'react';
import '../styles/Signup.css'; // 스타일링을 따로 Signup.css로 분리할 수 있습니다.

const Signup = () => {
  // 상태 관리
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 비밀번호 토글 기능
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // 회원가입 처리
  const handleSignup = (e) => {
    e.preventDefault();
    // 실제 회원가입 로직 구현 부분 (예: API 호출)
    if (password === confirmPassword) {
      console.log('회원가입 성공:', nickname, username, password);
    } else {
      console.log('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>회원가입</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              id="nickname"
              placeholder="닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
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
          <div className="input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              placeholder="비밀번호를 재입력하세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
              👁
            </span>
          </div>
          <button type="submit" className="signup-btn">완료하기</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
