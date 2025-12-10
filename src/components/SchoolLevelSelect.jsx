import React from "react";

const SchoolLevelSelect = ({ value, onChange }) => {
  return (
    <select className="tt-select" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">학교급 선택</option>
      <option value="elsTimetable">초등학교</option>
      <option value="misTimetable">중학교</option>
      <option value="hisTimetable">고등학교</option>
    </select>
  );
};

export default SchoolLevelSelect;
