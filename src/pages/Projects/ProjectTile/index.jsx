import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
const ProjectTile = ({
  projectImage,
  ButtonText,
  description,
  codeLink,
  skills,
}) => {
  return (
    <Row className="h-100 w-100 mt-1 ">
      <></>
      <Col sm={7} className="ps-5">
        <p className="fw-bold">What I made...</p>
        <div className="ps-5 text-secondary">
          {description.map((ele) => {
            return <li className="list-style-bullets">{ele}</li>;
          })}
        </div>
        <p className="fw-bold mt-4">How I made it...</p>
        <div className="ps-5">
          {skills?.map((ele, index) => {
            return (
                  <Button
                color="secondary"
                outline
                className="p-2 m-1 w-25 pe-none"
              >
                {ele}
              </Button> 
            );
          })}
        </div>
      </Col>
      <Col
        sm={5}
        className="d-flex justify-content-center align-items-center flex-column  "
      >
        <div className="w-100">
          <img
            src={projectImage}
            className="img-fluid border border-5  "
            alt=""
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProjectTile;
