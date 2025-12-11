import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css"; // ⭐️ 새로 만든 CSS import
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import tigerIcon from "../assets/tiger.png"; // 호랑이 사진
import { fetchUserInfo, updateUserInfo } from "../utils/api"; // ⭐️ 실제 API 함수 사용

const Profile = () => {
  const navigate = useNavigate();

  // 1. 실제 유저 데이터 상태 (초기값 null)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 수정 모드 상태
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  // 2. 페이지 로드 시 DB에서 정보 가져오기
  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = await fetchUserInfo();
        if (userData) {
          setUser(userData);
          setEditForm(userData); // 수정 폼 초기값 설정
        } else {
          alert("로그인 정보가 없습니다.");
          navigate("/login");
        }
      } catch (e) {
        console.error("프로필 로드 실패:", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [navigate]);

  // 홈으로 이동
  const goHome = () => navigate("/mainpage");

  // 수정 모드 켜기
  const handleEditClick = () => {
    setEditForm(user); // 현재 상태로 폼 초기화
    setIsEditing(true);
  };

  // 수정 취소
  const handleCancel = () => {
    setIsEditing(false);
    setEditForm(user);
  };

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  // ⭐️ [핵심] DB 저장 요청
  const handleSave = async () => {
    // API에 보낼 데이터 구성 (UserUpdateDto 형식에 맞춤)
    const updatePayload = {
      nickname: editForm.nickname, // 닉네임 수정
      gradeLevel: editForm.gradeLevel,
      gradeNumber: parseInt(editForm.gradeNumber, 10),
      track: editForm.track,
      subjectPrimary: editForm.subjectPrimary,
      // subjectDetail은 필요시 추가
    };

    const success = await updateUserInfo(updatePayload);
    if (success) {
      alert("학생증 정보가 수정되었습니다! 🪪");
      setUser({ ...user, ...updatePayload }); // 화면 즉시 갱신
      setIsEditing(false);
    } else {
      alert("정보 수정에 실패했습니다.");
    }
  };

  // 매핑용 텍스트
  const ageMap = { elementary: "초등학교", middle: "중학교", high: "고등학교" };
  const subjectMap = { 
    korea: "국어", math: "수학", english: "영어", 
    social: "사회", science: "과학", history: "한국사" 
  };
  const trackMap = { society: "문과", science: "이과" };

  if (loading) return <div className="profile-container"><h1>Loading...</h1></div>;

  return (
    <div className="profile-container">
      {/* 로고 영역 */}
      <div className="profile-logo" onClick={goHome}>
        <img src={logo} alt="logo" className="logo-img" />
        <img src={logotext} alt="text" className="logo-text" />
      </div>

      {/* 🪪 학생증 카드 UI */}
      <div className="id-card">
        {/* 카드 헤더 (파란 띠 & 구멍) */}
        <div className="card-header-band">
          <div className="lanyard-hole"></div>
        </div>

        {/* 프로필 사진 */}
        <img src={tigerIcon} alt="Profile" className="profile-tiger" />

        <div className="card-body">
          {/* 이름 (닉네임) 영역 */}
          <div className="name-area">
            <span className="label-role">STUDENT ID CARD</span>
            {isEditing ? (
              <input 
                className="edit-input" 
                name="nickname"
                value={editForm.nickname || ""} 
                onChange={handleChange}
                style={{ fontSize: "1.5rem", textAlign: "center", width: "100%" }}
              />
            ) : (
              <h1 className="name-text">{user.nickname}</h1>
            )}
          </div>

          {/* 학교 급 */}
          <div className="info-row">
            <span className="info-label">학교</span>
            {isEditing ? (
              <select className="edit-select" name="gradeLevel" value={editForm.gradeLevel} onChange={handleChange}>
                <option value="elementary">초등학교</option>
                <option value="middle">중학교</option>
                <option value="high">고등학교</option>
              </select>
            ) : (
              <span className="info-value">{ageMap[user.gradeLevel]}</span>
            )}
          </div>

          {/* 학년 */}
          <div className="info-row">
            <span className="info-label">학년</span>
            {isEditing ? (
              <select className="edit-select" name="gradeNumber" value={editForm.gradeNumber} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n}학년</option>
                ))}
              </select>
            ) : (
              <span className="info-value">{user.gradeNumber}학년</span>
            )}
          </div>

          {/* 계열 (고등학생만) */}
          {(user.gradeLevel === "high" || editForm.gradeLevel === "high") && (
            <div className="info-row">
              <span className="info-label">계열</span>
              {isEditing ? (
                <select className="edit-select" name="track" value={editForm.track || "society"} onChange={handleChange}>
                  <option value="society">문과</option>
                  <option value="science">이과</option>
                </select>
              ) : (
                <span className="info-value">{trackMap[user.track] || "-"}</span>
              )}
            </div>
          )}

          {/* 주력 과목 */}
          <div className="info-row" style={{ borderBottom: "none" }}>
            <span className="info-label">전공(주력)</span>
            {isEditing ? (
              <select className="edit-select" name="subjectPrimary" value={editForm.subjectPrimary} onChange={handleChange}>
                <option value="korea">국어</option>
                <option value="math">수학</option>
                <option value="english">영어</option>
                <option value="social">사회</option>
                <option value="science">과학</option>
                <option value="history">한국사</option>
              </select>
            ) : (
              <span className="info-value">{subjectMap[user.subjectPrimary] || user.subjectPrimary}</span>
            )}
          </div>

          {/* 버튼 그룹 */}
          <div className="btn-group">
            {isEditing ? (
              <>
                <button className="action-btn btn-save" onClick={handleSave}>발급 완료</button>
                <button className="action-btn btn-cancel" onClick={handleCancel}>취소</button>
              </>
            ) : (
              <>
                <button className="action-btn btn-home" onClick={goHome}>메인으로</button>
                <button className="action-btn btn-edit" onClick={handleEditClick}>정보 수정</button>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;