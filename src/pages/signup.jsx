import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 페이지 이동을 위해 추가
import '../styles/signup.css';

const Signup = () => {
  const navigate = useNavigate();

  // 상태 관리: username 대신 email 사용
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState(''); // 💡 username 대신 email로 변경
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(''); // 👈 에러 메시지 상태 추가

  // 비밀번호 토글 기능
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // 회원가입 처리 (API 연동)
  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // 에러 초기화

    // 1. 클라이언트 측 비밀번호 일치 확인
    if (password !== confirmPassword) {
      setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    // 2. API 엔드포인트 설정
    const API_URL = 'http://localhost:3000/api/auth/register';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // 💡 백엔드 User 모델 필드에 맞게 전송
          nickname: nickname,
          email: email, // 🚨 email 필드로 전송
          password: password,
        }),
      });

      // 3. 응답 처리
      if (response.ok || response.status === 201) {
        // 회원가입 성공
        alert('회원가입이 성공적으로 완료되었습니다! 로그인 페이지로 이동합니다.');
        navigate('/HomeAfter'); // 🔑 로그인 페이지로 이동
      } else {
        // 회원가입 실패 (400 Bad Request, 중복 이메일 등)
        const errorText = await response.text();

        if (response.status === 400) {
          setError('이미 사용 중인 이메일이거나 입력 형식이 올바르지 않습니다.');
        } else {
          setError(`회원가입에 실패했습니다. (코드: ${response.status})`);
        }
        console.error("Signup Failed Response:", response.status, errorText);
      }
    } catch (err) {
      // 네트워크 연결 실패
      setError('서버에 연결할 수 없습니다. 네트워크를 확인하세요.');
      console.error('Signup Error:', err);
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
          {/* 🚨 아이디(username) 필드를 이메일(email) 필드로 변경 */}
          <div className="input-group">
            <input
              type="email" // 👈 타입 변경
              id="email"   // 👈 id 변경
              placeholder="이메일(아이디)을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // 👈 상태 핸들러 변경
              required
            />
          </div>
          {/* 비밀번호 입력 */}
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
          {/* 비밀번호 재입력 */}
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

          {/* 💡 에러 메시지 출력 */}
          {error && <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

          <button type="submit" className="signup-btn">완료하기</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;