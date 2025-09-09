import EducationTile from "./EducationTile";
import { Col, Row } from "reactstrap";

const Education = () => {
  return (
    <div className="education-conatiner p-5 " id="Education">
      <div className="w-100 headers-timeline">
        <div className="d-flex timeline-small-header">
          <div className="divider-1 me-3">
            {" "}
            <span></span>
          </div>
          <h3 className="heading-1">TIMELINE</h3>
        </div>
        <div className="contact-me pb-5 timeline-period">Timeline Period</div>
      </div>

      <Row>
        <Col
          sm={6}
          className=" d-flex align-items-center  justify-content-center"
        >
          <div className="v-stack gap-3 w-100 ">
            <Row className="education-titles border-3  w-100 align-items-center  justify-content-center ">
              EDUCATION
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="SGSITS Indore"
                marks="8.07CGPA"
                year="2022-ongoing"
              />
            </Row>

            <Row className=" w-100 ">
              <EducationTile
                place="CBSE className 12th"
                marks="95%"
                year="2022"
              />
            </Row>
            <Row className=" w-100 ">
              <EducationTile
                place="CBSE className 10th"
                marks="95.4% "
                year="2020"
              />
            </Row>
          </div>
        </Col>

        <Col
          sm={6}
          className=" d-flex align-items-center  justify-content-center"
        >
          <div className="v-stack gap-3 w-100 ">
            <Row className="education-titles border-3  w-100 align-items-center  justify-content-center ">
              ACHIEVEMENTS
            </Row>
            <Row className="w-100">
              <EducationTile place="JEE Mains" marks="92.7" year="2022" />
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Education;