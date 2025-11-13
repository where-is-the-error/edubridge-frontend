import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 성공 시
    navigate("/homeafter"); // HomeAfter 페이지로 이동
  };

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
      <button onClick={handleLogin}>로그인 성공!</button>
    </div>
  );
};

export default Login;
