import React, { useState } from "react";
import axios from "axios";
import "../styles/timetable.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";

// 시도교육청 리스트
const officeList = [
  { code: "B10", name: "서울특별시교육청" },
  { code: "C10", name: "부산광역시교육청" },
  { code: "D10", name: "대구광역시교육청" },
  { code: "E10", name: "인천광역시교육청" },
  { code: "F10", name: "광주광역시교육청" },
  { code: "G10", name: "대전광역시교육청" },
  { code: "H10", name: "울산광역시교육청" },
  { code: "I10", name: "세종특별자치시교육청" },
  { code: "J10", name: "경기도교육청" },
  { code: "K10", name: "강원특별자치도교육청" },
  { code: "M10", name: "충청북도교육청" },
  { code: "N10", name: "충청남도교육청" },
  { code: "P10", name: "전라북도교육청" },
  { code: "Q10", name: "전라남도교육청" },
  { code: "R10", name: "경상북도교육청" },
  { code: "S10", name: "경상남도교육청" },
  { code: "T10", name: "제주특별자치도교육청" },
];

// 오늘 날짜 기준 학년도 + 학기 계산
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;

// 학년도 (3월 기준, 1~2월은 전년도 학년도)
const AY = month >= 3 ? year : year - 1;
const AY_STRING = AY.toString();

// 학기 계산 (1학기: 3~8월, 2학기: 9~2월)
const SEM = month >= 3 && month <= 8 ? "1" : "2";

const Timetable = () => {
  const NEIS_KEY = import.meta.env.VITE_NEIS_API_KEY;

  // 선택값
  const [atptCode, setAtptCode] = useState("");
  const [schoolCode, setSchoolCode] = useState("");
  const [grade, setGrade] = useState("");
  const [className, setClassName] = useState("");

  // 리스트들
  const [schoolList, setSchoolList] = useState([]);
  const [gradeList, setGradeList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [classInfoRows, setClassInfoRows] = useState([]);

  // 시간표
  const [timetable, setTimetable] = useState({});
  const [loading, setLoading] = useState(false);

  // 날짜 → 요일 변환
  const getDayName = (dateStr) => {
    const date = new Date(
      dateStr.substring(0, 4),
      Number(dateStr.substring(4, 6)) - 1,
      dateStr.substring(6, 8)
    );
    return ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  };

  // ================================================
  //  교육청 선택 → 학교 리스트 불러오기
  // ================================================
  const handleAtptChange = async (e) => {
    const code = e.target.value;
    setAtptCode(code);

    // 초기화
    setSchoolCode("");
    setGrade("");
    setClassName("");
    setSchoolList([]);
    setGradeList([]);
    setClassList([]);
    setClassInfoRows([]);
    setTimetable({});

    if (!code) return;

    try {
      const res = await axios.get("https://open.neis.go.kr/hub/schoolInfo", {
        params: {
          KEY: NEIS_KEY,
          Type: "json",
          ATPT_OFCDC_SC_CODE: code,
          pIndex: 1,
          pSize: 1000,
        },
      });

      const rows = res.data.schoolInfo?.[1]?.row || [];
      setSchoolList(rows);
    } catch (err) {
      console.error("학교 리스트 불러오기 실패:", err);
      alert("학교 정보를 불러오지 못했습니다.");
    }
  };

  const handleSchoolChange = async (e) => {
    const code = e.target.value;
    setSchoolCode(code);

    // 초기화
    setGrade("");
    setClassName("");
    setGradeList([]);
    setClassList([]);
    setClassInfoRows([]);
    setTimetable({});

    if (!code || !atptCode) return;

    setLoading(true);

    try {
      const res = await axios.get("https://open.neis.go.kr/hub/classInfo", {
        params: {
          KEY: NEIS_KEY,
          Type: "json",
          ATPT_OFCDC_SC_CODE: atptCode,
          SD_SCHUL_CODE: code,
          AY: AY_STRING,     // 🔥 자동학년도 적용
          pIndex: 1,
          pSize: 1000,
        },
      });

      const rows = res.data.classInfo?.[1]?.row || [];
      setClassInfoRows(rows);

      const grades = Array.from(new Set(rows.map((r) => r.GRADE))).sort(
        (a, b) => Number(a) - Number(b)
      );

      setGradeList(grades);
    } catch (err) {
      console.error("classInfo 불러오기 실패:", err);
      alert("학년/반 정보를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // ================================================
  // 학년 선택 → 해당 학년의 반 추출
  // ================================================
  const handleGradeChange = (e) => {
    const g = e.target.value;
    setGrade(g);
    setClassName("");
    setTimetable({});

    if (!g) {
      setClassList([]);
      return;
    }

    const filtered = classInfoRows.filter((r) => r.GRADE === g);
    const classes = Array.from(new Set(filtered.map((r) => r.CLASS_NM))).sort(
      (a, b) => Number(a) - Number(b)
    );

    setClassList(classes);
  };

  // 반 선택
  const handleClassChange = (e) => {
    setClassName(e.target.value);
    setTimetable({});
  };

  // ================================================
  // 조회 버튼 → misTimetable 불러오기
  // ================================================
  const handleFetchTimetable = async () => {
    if (!atptCode || !schoolCode || !grade || !className) {
      alert("시도교육청, 학교, 학년, 반을 모두 선택해 주세요.");
      return;
    }

    setLoading(true);
    setTimetable({});

    try {
      const res = await axios.get("https://open.neis.go.kr/hub/misTimetable", {
        params: {
          KEY: NEIS_KEY,
          Type: "json",
          ATPT_OFCDC_SC_CODE: atptCode,
          SD_SCHUL_CODE: schoolCode,
          AY: AY_STRING,    // 🔥 자동 학년도
          SEM: SEM,         // 🔥 자동 학기
          GRADE: grade,
          CLASS_NM: className,
          pIndex: 1,
          pSize: 100,
        },
      });

      const row = res.data.misTimetable?.[1]?.row || [];

      const newTable = {};
      row.forEach((item) => {
        const day = getDayName(item.ALL_TI_YMD);
        if (!newTable[day]) newTable[day] = [];
        newTable[day].push(item);
      });

      // 교시 정렬
      Object.keys(newTable).forEach((day) => {
        newTable[day].sort((a, b) => Number(a.PERIO) - Number(b.PERIO));
      });

      setTimetable(newTable);
    } catch (err) {
      console.error("시간표 불러오기 실패:", err);
      alert("시간표를 불러오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  // 요일/교시
  const days = ["월", "화", "수", "목", "금"];
  const periods = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="tt-container">
      {/* 로고 */}
      <div className="tt-logo">
        <img src={logo} className="logo" alt="logo-dot" />
        <img src={logotext} className="logotext" alt="logo-text" />
      </div>

      {/* 제목 */}
      <h1 className="tt-title">시간표 조회</h1>

      {/* 선택 박스 */}
      <div className="tt-select-group">

        {/* 교육청 */}
        <select className="tt-select" value={atptCode} onChange={handleAtptChange}>
          <option value="">시도교육청</option>
          {officeList.map((o) => (
            <option key={o.code} value={o.code}>
              {o.name}
            </option>
          ))}
        </select>

        {/* 학교 */}
        <select
          className="tt-select"
          value={schoolCode}
          onChange={handleSchoolChange}
          disabled={!atptCode}
        >
          <option value="">
            {atptCode ? "학교 선택" : "교육청 먼저 선택"}
          </option>
          {schoolList.map((s) => (
            <option key={s.SD_SCHUL_CODE} value={s.SD_SCHUL_CODE}>
              {s.SCHUL_NM}
            </option>
          ))}
        </select>

        {/* 학년 */}
        <select
          className="tt-select"
          value={grade}
          onChange={handleGradeChange}
          disabled={!schoolCode}
        >
          <option value="">학년</option>
          {gradeList.map((g) => (
            <option key={g} value={g}>
              {g}학년
            </option>
          ))}
        </select>

        {/* 반 */}
        <select
          className="tt-select"
          value={className}
          onChange={handleClassChange}
          disabled={!grade}
        >
          <option value="">반</option>
          {classList.map((c) => (
            <option key={c} value={c}>
              {c}반
            </option>
          ))}
        </select>

        <button className="tt-btn" onClick={handleFetchTimetable}>
          조회
        </button>
      </div>

      {/* 시간표 + 메모 */}
      <div className="tt-content-area">
        <table className="tt-table">
          <thead>
            <tr>
              <th className="tt-time">교시</th>
              {days.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((p) => (
              <tr key={p}>
                <td className="tt-time">{p}교시</td>
                {days.map((day) => {
                  const subject =
                    timetable[day]?.find((r) => Number(r.PERIO) === p)
                      ?.ITRT_CNTNT || "";
                  return <td key={day + p}>{subject.replace("-", "")}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="tt-memo">개인 메모</div>
      </div>

      {loading && (
        <div
          style={{
            position: "absolute",
            bottom: "3vh",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.2vw",
            fontWeight: 600,
            color: "#0A4F8F",
          }}
        >
          불러오는 중...
        </div>
      )}
    </div>
  );
};

export default Timetable;
