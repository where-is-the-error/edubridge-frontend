import React from "react";

const DaySelect = ({ value, onChange }) => {
  return (
    <select className="tt-select" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">요일 전체</option>
      <option value="MON">월요일</option>
      <option value="TUE">화요일</option>
      <option value="WED">수요일</option>
      <option value="THU">목요일</option>
      <option value="FRI">금요일</option>
    </select>
  );
};

export default DaySelect;
