import React, { useState } from "react"; // 👈 useState 추가
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // 1. 상태 관리: 사용자 ID와 비밀번호 상태 추가
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 상태

  // 2. API 호출 로직 수정
  const handleLogin = async () => { // 👈 async 키워드 추가
    setError(""); // 이전 에러 초기화

    // TODO: 백엔드 API 엔드포인트를 여기에 입력하세요.
    const API_URL = "http://localhost:3000/api/auth/signin"; 

    try {
      const response = await fetch(API_URL, {
        method: "POST", // HTTP 메서드는 POST 사용
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ // 👈 JSON 형태로 서버에 데이터 전송
          email: email,
          password: password,
        }),
      });

      // 서버 응답 처리
      if (response.ok) {
        // HTTP 상태 코드가 200번대(성공)인 경우
        const data = await response.json();
        
        // 3. 인증 정보 저장 (예: 토큰 저장)
        localStorage.setItem('accessToken', data.token); // 예시: 토큰 저장
        
        // 4. 로그인 성공 후 페이지 이동
        navigate("/age"); 
      } else {
        // 로그인 실패 (예: 401 Unauthorized)
        const errorData = await response.json();
        setError(errorData.message || "비밀번호 혹은 이메일을 확인해주세요"); // 서버 에러 메시지 표시
      }
    } catch (err) {
      // 네트워크 오류나 요청 실패 처리
      setError("서버 연결에 실패했습니다. 네트워크를 확인하세요.");
      console.error("Login Error:", err);
    }
  };
//
  // 3. 렌더링: 입력 필드 추가
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Noto Sans KR, sans-serif",
      }}
    >
      <h2>로그인 페이지</h2>
      
      {/* 이메일 입력 필드 */}
      <input
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "5px", padding: "10px" }}
      />
      
      {/* 비밀번호 입력 필드 */}
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "5px", padding: "10px" }}
      />
      
      {/* 에러 메시지 표시 */}
      {error && <p style={{ color: "red" }}>{error}</p>} 
      
      {/* 로그인 버튼 */}
      <button onClick={handleLogin} style={{ padding: "10px 20px", marginTop: "10px" }}>
        로그인
      </button>
      
    </div>
  );
};

export default Login;