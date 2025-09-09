import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const SkillsTab = ({ header, icon, skillList }) => {
  return (
    <Card body color="light" className="m-3   card-skills-tab hover-effect">
      <CardBody>
        <CardTitle
          tag="h5"
          className="d-flex justify-content-center  skill-icon"
        >
          {icon}
        </CardTitle>
        <CardSubtitle
          className="mb-2  d-flex justify-content-center align-items-center  skill-header text-center "
          tag="h5"
        >
          {header}
        </CardSubtitle>
        <hr />
        <CardText>
          {" "}
          {skillList.map((ele, index) => {
            return (
              <li key={index} className="text-secondary text-justify">
                {ele}
              </li>
            );
          })}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default SkillsTab;
