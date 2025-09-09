import React from "react";
import { Col, Container, Row } from "reactstrap";

const InfoTable = () => {
  return (
    <div className=" h-100 w-100 p-5 d-flex align-items-center justify-content-center  ">
      <Container className="   w-100   g-0 ">
        <Row className="  about-detail-header p-3 g-0 ">
          <h1 className="about-detail-header-title ">Personal details</h1>
        </Row>
        <div className="infotable-conatiner">
          <Row className="px-4 py-2 infotable-text ">
            <Col sm={3} className="fw-bold">
              Name:{" "}
            </Col>
            <Col sm={9}>Adwait Dubey</Col>
          </Row>
          <Row className="px-4 py-2 infotable-text">
            <Col sm={3} className="fw-bold">
              City:{" "}
            </Col>
            <Col sm={9}>Indore,MP</Col>
          </Row>
          <Row className="px-4 py-2 infotable-text">
            <Col sm={3} className="fw-bold">
              University:{" "}
            </Col>
            <Col sm={9}>SGSITS Indore</Col>
          </Row>
          <Row className="px-4 py-2 infotable-text">
            <Col sm={3} className="fw-bold">
              Degree:{" "}
            </Col>
            <Col sm={9}>B.Tech in Electronics and Instrumentation</Col>
          </Row>
          <Row className="px-4 py-2 infotable-text">
            <Col sm={3} className="fw-bold">
              Phone:{" "}
            </Col>
            <Col sm={9}>9111970405</Col>
          </Row>
          <Row className="text-break px-4 py-2 infotable-text">
            <Col sm={3} className="fw-bold">
              Email:{" "}
            </Col>
            <Col sm={9}>adwaitdubey13@gmail.com</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default InfoTable;
