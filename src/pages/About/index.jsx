import React from "react";
import { Button, Col, Row } from "reactstrap";
import InfoTable from "./InfoTable";

const About = () => {
  const PDF_FILE_URL = `${window.location.origin}/portfolio.pdf`;

  const handleDownloadCv = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "PORTFOLIO.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <Row className="about-container g-0  px-5 " id="About">
      <Col
        sm={6}
        className="d-flex justify-content-center align-items-center h-100 p-5 mb-5"
      >
        <div>
          <div className="d-flex adwait-dubey-about">
            <div className="divider-1 me-3">
              {" "}
              <span></span>
            </div>
            <h3 className="heading-1">Adwait Dubey</h3>
          </div>
          <h1 className="about-title">Aspiring Software Developer based in Indore,MP</h1>
          <p className="about-text">
           I'm Adwait, an Electronics and Instrumentation Engineering student from Indore, Madhya Pradesh. My passion lies in web development, where I've developed a strong foundation in JavaScript and React. I enjoy building responsive, interactive user interfaces and continuously refining my skills through real-world projects.

Beyond the frontend, I have a solid grip on Data Structures and Algorithms (DSA), which strengthens my problem-solving approach and logical thinking. Whether it's designing clean UI or tackling algorithmic challenges, I thrive in environments that push me to think critically and build efficiently.
          </p>
          <Button
            onClick={() => {
              handleDownloadCv(PDF_FILE_URL);
            }}
            size="lg"
            className="p-4"
          >
            Download CV
          </Button>
        </div>
      </Col>

      <Col sm={6} className="d-flex justify-content-center align-items-center ">
        <InfoTable />
      </Col>
    </Row>
  );
};

export default About; 