import { Col, Row } from "reactstrap";
import "./App.css";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Row>
          <Col sm={2} className="sidebar">
            <SideBar />
          </Col>
          <Col sm={10} className="main">
            <Home />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </Col>
        </Row>
      </div>
    </BrowserRouter>
  );
};

export default App;
