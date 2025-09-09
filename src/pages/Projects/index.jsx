import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="project-container p-5" id="Projects">
      <div className="w-100 headers-timeline">
        <div className="d-flex timeline-small-header">
          <div className="divider-1 me-3">
            {" "}
            <span></span>
          </div>
          <h3 className="heading-1">Portfolio</h3>
        </div>
        <div className="contact-me pb-5 timeline-period">Projects</div>
      </div>
      <div>
        <Accordion open={open} toggle={toggle}>
         
          <AccordionItem>
            <AccordionHeader targetId="5">
              <div className="accordion-title">E-Commerce Application</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="5"
              className="rolodex-accordion my-accordion"
            >
              <ProjectTile
                ButtonText="Visit code"
                description={[
                  "Designed and developed a complete e-commerce platform with user authentication, product catalog, shopping cart, and checkout.",
                  "Managed user, product, and order data in MongoDB.",
                  "Implemented responsive frontend using React.js",
                ]}
                skills={["React", "Node", "Express", "MongoDB"]}
              />
            </AccordionBody>
          </AccordionItem>
             <AccordionItem>
            <AccordionHeader targetId="3">
              <div className="accordion-title">Notes App</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="3"
              className="rolodex-accordion my-accordion"
            >
              <ProjectTile
                description={[
                  "Developed a Notes Application with features like add, edit, and delete notes, ensuring a clean and user-friendly interface.",
                  "Integrated local storage to persist notes across sessions without requiring a backend.",
                ]}
                skills={["HTML", "CSS", "Javascript"]}
              />
            </AccordionBody>
          </AccordionItem>
             <AccordionItem>
            <AccordionHeader targetId="3">
              <div className="accordion-title">Tic-Tac-Toe Game</div>
            </AccordionHeader>
            <AccordionBody
              accordionId="3"
              className="rolodex-accordion my-accordion"
            >
              <ProjectTile
                description={[
                  "Built a classic Tic Tac Toe game with an interactive UI and responsive design, allowing two players to compete seamlessly.",
                  "Built a classic Tic Tac Toe game with an interactive UI and responsive design, allowing two players to compete seamlessly.",
                ]}
                skills={["HTML", "CSS", "Javascript"]}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;