import React from "react";

const EducationTile = ({ place, marks, year }) => {
  return (
    <div className="w-100 education-tile v-stack">
      <div className="place-marks ">
        <div className="education-place">{place}</div>
        <div className="education-marks">{marks}</div>
      </div>
      <div className="year ">{year}</div>
    </div>
  );
};

export default EducationTile;
