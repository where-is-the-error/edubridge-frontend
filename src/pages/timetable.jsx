import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/timetable.css";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import { saveSchoolInfo, fetchSavedSchoolInfo } from "../utils/api";

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
const [aiMemo, setAiMemo] = useState("AI가 메모를 정리하고 있어요... 🐯");
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const AY = month >= 3 ? year : year - 1;
const AY_STRING = AY.toString();
const SEM = month >= 3 && month <= 8 ? "1" : "2";

const Timetable = () => {
  const NEIS_KEY = import.meta.env.VITE_NEIS_API_KEY;

  const [atptCode, setAtptCode] = useState("");
  const [schoolCode, setSchoolCode] = useState("");
  const [grade, setGrade] = useState("");
  const [className, setClassName] = useState("");

  const [schoolList, setSchoolList] = useState([]);
  const [gradeList, setGradeList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [classInfoRows, setClassInfoRows] = useState([]);

  const [timetable, setTimetable] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSelectionHidden, setIsSelectionHidden] = useState(false);
  
  // ⭐️ [신규] 화면에 표시할 학교 이름 상태
  const [schoolNameDisplay, setSchoolNameDisplay] = useState("");

  const days = ["월", "화", "수", "목", "금"];
  const periods = [1, 2, 3, 4, 5, 6, 7];
  
  const getDayName = (dateStr) => {
    const date = new Date(
      dateStr.substring(0, 4),
      Number(dateStr.substring(4, 6)) - 1,
      dateStr.substring(6, 8)
    );
    return ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
  };

  useEffect(() => {
    const init = async () => {
      const savedInfo = await fetchSavedSchoolInfo();
      if (savedInfo) {
        setAtptCode(savedInfo.officeCode);
        setSchoolCode(savedInfo.schoolCode);
        setGrade(savedInfo.grade);
        setClassName(savedInfo.classNm);
        
        // 저장된 학교 이름 설정
        setSchoolNameDisplay(savedInfo.schoolName);

        await executeFetchTimetable(
          savedInfo.officeCode,
          savedInfo.schoolCode,
          savedInfo.grade,
          savedInfo.classNm,
          false 
        );
        setTimeout(() => setIsSelectionHidden(true), 500);
      }

      const summary = await fetchAiMemoSummary();
      setAiMemo(summary);
    };
    init();
  }, []);

  const handleAtptChange = async (e) => {
    const code = e.target.value;
    setAtptCode(code);
    setSchoolCode(""); setGrade(""); setClassName("");
    setSchoolList([]); setGradeList([]); setClassList([]); setTimetable({});
    if (!code) return;
    try {
      const res = await axios.get("https://open.neis.go.kr/hub/schoolInfo", {
        params: { KEY: NEIS_KEY, Type: "json", ATPT_OFCDC_SC_CODE: code, pIndex: 1, pSize: 1000 },
      });
      setSchoolList(res.data.schoolInfo?.[1]?.row || []);
    } catch (err) { alert("학교 정보를 불러오지 못했습니다."); }
  };

  const handleSchoolChange = async (e) => {
    const code = e.target.value;
    setSchoolCode(code);
    setGrade(""); setClassName(""); setGradeList([]); setClassList([]); setTimetable({});
    if (!code) return;
    setLoading(true);
    try {
      const res = await axios.get("https://open.neis.go.kr/hub/classInfo", {
        params: { KEY: NEIS_KEY, Type: "json", ATPT_OFCDC_SC_CODE: atptCode, SD_SCHUL_CODE: code, AY: AY_STRING, pIndex: 1, pSize: 1000 },
      });
      const rows = res.data.classInfo?.[1]?.row || [];
      setClassInfoRows(rows);
      const grades = Array.from(new Set(rows.map((r) => r.GRADE))).sort((a, b) => Number(a) - Number(b));
      setGradeList(grades);
    } catch (err) { alert("학년 정보를 불러오지 못했습니다."); }
    finally { setLoading(false); }
  };

  const handleGradeChange = (e) => {
    const g = e.target.value;
    setGrade(g);
    setClassName(""); setTimetable({});
    if (!g) { setClassList([]); return; }
    const filtered = classInfoRows.filter((r) => r.GRADE === g);
    const classes = Array.from(new Set(filtered.map((r) => r.CLASS_NM))).sort((a, b) => Number(a) - Number(b));
    setClassList(classes);
  };

  const handleClassChange = (e) => setClassName(e.target.value);

  const executeFetchTimetable = async (pAtpt, pSchool, pGrade, pClass, shouldSave = false) => {
    setLoading(true);
    setTimetable({});

    if (shouldSave) {
      const selectedOffice = officeList.find(o => o.code === pAtpt);
      const selectedSchool = schoolList.find(s => s.SD_SCHUL_CODE === pSchool);
      if (selectedOffice && selectedSchool) {
        saveSchoolInfo({
          officeCode: pAtpt,
          officeName: selectedOffice.name,
          schoolCode: pSchool,
          schoolName: selectedSchool.SCHUL_NM,
          grade: pGrade,
          classNm: pClass
        });
      }
    }

    try {
      const res = await axios.get("https://open.neis.go.kr/hub/misTimetable", {
        params: {
          KEY: NEIS_KEY,
          Type: "json",
          ATPT_OFCDC_SC_CODE: pAtpt,
          SD_SCHUL_CODE: pSchool,
          AY: AY_STRING,
          SEM: SEM,
          GRADE: pGrade,
          CLASS_NM: pClass,
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
      Object.keys(newTable).forEach((day) => {
        newTable[day].sort((a, b) => Number(a.PERIO) - Number(b.PERIO));
      });
      setTimetable(newTable);
    } catch (err) {
      console.error("시간표 로드 실패", err);
    } finally {
      setLoading(false);
    }
  };

  const onManualFetch = () => {
    if (!atptCode || !schoolCode || !grade || !className) {
      alert("모든 정보를 선택해주세요.");
      return;
    }
    
    // ⭐️ 선택된 학교 이름 찾아서 설정
    const selectedSchool = schoolList.find(s => s.SD_SCHUL_CODE === schoolCode);
    if (selectedSchool) setSchoolNameDisplay(selectedSchool.SCHUL_NM);

    executeFetchTimetable(atptCode, schoolCode, grade, className, true);
    setIsSelectionHidden(true); 
  };

  const handleReset = () => {
    setIsSelectionHidden(false);
    setTimetable({});
  };

  return (
    <div className="tt-container">
      <div className="tt-logo">
        <img src={logo} className="logo" alt="logo-dot" />
        <img src={logotext} className="logotext" alt="logo-text" />
      </div>

      {/* ⭐️ isSelectionHidden 여부에 따라 텍스트와 스타일 변경 */}
      <h1 className={`tt-title ${isSelectionHidden ? "slide-down" : ""}`}>
        {isSelectionHidden 
          ? `${schoolNameDisplay} ${grade}학년 ${className}반` 
          : "시간표 조회"}
      </h1>

      <div className={`tt-select-group ${isSelectionHidden ? "hidden" : ""}`}>
        <select className="tt-select" value={atptCode} onChange={handleAtptChange}>
          <option value="">시도교육청</option>
          {officeList.map((o) => (<option key={o.code} value={o.code}>{o.name}</option>))}
        </select>
        <select className="tt-select" value={schoolCode} onChange={handleSchoolChange} disabled={!atptCode}>
          <option value="">{atptCode ? "학교 선택" : "교육청 먼저 선택"}</option>
          {schoolList.map((s) => (<option key={s.SD_SCHUL_CODE} value={s.SD_SCHUL_CODE}>{s.SCHUL_NM}</option>))}
        </select>
        <select className="tt-select" value={grade} onChange={handleGradeChange} disabled={!schoolCode}>
          <option value="">학년</option>
          {gradeList.map((g) => (<option key={g} value={g}>{g}학년</option>))}
        </select>
        <select className="tt-select" value={className} onChange={handleClassChange} disabled={!grade}>
          <option value="">반</option>
          {classList.map((c) => (<option key={c} value={c}>{c}반</option>))}
        </select>
        <button className="tt-btn" onClick={onManualFetch}>조회</button>
      </div>

      <div className="tt-content-area">
        {/* ⭐️ 왼쪽: 테이블 */}
        <div className="tt-table-wrapper">
          <table className="tt-table">
            <thead>
              <tr>
                <th className="tt-time">교시</th>
                {days.map((d) => <th key={d}>{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {periods.map((p) => (
                <tr key={p}>
                  <td className="tt-time">{p}교시</td>
                  {days.map((day) => {
                    const subject = timetable[day]?.find((r) => Number(r.PERIO) === p)?.ITRT_CNTNT || "";
                    return <td key={day + p}>{subject.replace("-", "")}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* ⭐️ 테이블 바로 아래에 작은 버튼 배치 */}
          {isSelectionHidden && (
            <button className="tt-reset-btn" onClick={handleReset}>
              다른 학교 조회하기 ↻
            </button>
          )}
        </div>

        {/* 오른쪽: 메모 */}
        <div className="tt-memo">개인 메모</div>
      </div>

      {loading && (
        <div style={{ position: "absolute", bottom: "3vh", left: "50%", transform: "translateX(-50%)", fontSize: "1.2vw", fontWeight: 600, color: "#0A4F8F" }}>
          시간표를 가져오는 중...
        </div>
      )}
    </div>
  );
};

export default Timetable;