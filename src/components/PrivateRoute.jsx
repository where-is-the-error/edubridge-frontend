import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      alert("로그인이 필요한 페이지입니다.");
      navigate("/login");
    }
  }, [token, navigate]);

  // 토큰이 없으면 아무것도 보여주지 않음 (리다이렉트 대기)
  if (!token) return null;

  // 토큰이 있으면 자식 컴포넌트(페이지) 렌더링
  return children;
};

export default PrivateRoute;