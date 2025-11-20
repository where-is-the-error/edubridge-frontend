import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"; // CSS 파일 경로는 그대로 유지됩니다.

const Login = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 비밀번호 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 로그인 처리(API 연동)
  const handleLogin = async (e) => {
    e.preventDefault(); // 👈 폼 제출 시 페이지 새로고침 방지
    setError("");

    // 🔑 정확한 API 경로: http://localhost:3000/api/auth/signin
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
        // 200번대 응답: 로그인 성공
        const data = await response.json();
        // 🔑 3. 인증 정보 저장
        localStorage.setItem("accessToken", data.token);
        navigate("/HomeAfter"); // 로그인 성공 → 연령 선택 페이지로 이동

      } else if (response.status === 401) {
        // 🚨 401 Unauthorized: 백엔드에서 인증 실패 시 body 없이 보낸 경우 처리
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");

      } else {
        // 그 외의 4xx, 5xx 에러 처리
        // 400 Bad Request 등 다른 에러일 경우를 대비해 JSON 파싱 시도
        try {
          const errorData = await response.json();
          // 백엔드에서 message를 보냈다면 그 메시지를 사용, 아니면 일반 에러 메시지 사용
          setError(errorData.message || `로그인 실패 (코드: ${response.status})`);
        } catch (e) {
          // JSON 본문이 없거나 파싱 불가능한 경우
          setError(`서버 응답 오류가 발생했습니다. (코드: ${response.status})`);
        }
      }
    } catch (err) {
      // 네트워크 연결 자체 실패 (CORS 문제, 서버 꺼짐 등)
      setError("서버에 연결할 수 없습니다. 백엔드 서버 상태를 확인하세요.");
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>EDU BRIDGE</h2>

        {/* 폼 제출 이벤트에 handleLogin 함수 연결 */}
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