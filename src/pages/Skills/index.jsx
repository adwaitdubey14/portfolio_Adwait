import React from "react";
import { Row } from "reactstrap";

import SimpleSlider from "./SimpleSlider";

const Skills = () => {
  return (
    <Row className="skills-container g-0 py-5" id="Skills">
      <Row className="d-flex justify-content-center align-items-center h-100 p-5 mb-5 ">
        <div>
          <div className="d-flex skills-header">
            <div className="divider-1 me-3">
              {" "}
              <span></span>
            </div>
            <h3 className="heading-1">Skills</h3>
          </div>
          <h1 className="about-title">Technical Proficiencies</h1>
        </div>
      </Row>
      <Row className="d-flex align-items-center justify-content-center mb-5 h-100 px-5">
        <SimpleSlider />
      </Row>
    </Row>
  );
};

export default Skills;
