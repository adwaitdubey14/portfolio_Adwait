import React, { useState } from "react";
import Title from "../Title/index";
import { Button, Row } from "reactstrap";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const MobileView = () => {
  const [click, setclick] = useState(false);
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
    <div className="mobile-view">
      <div className=" sidebar-container my-2 d-flex flex-column mx-2">
        <h1 className="fw-bolder">ADWAIT</h1>

        {click ? (
          <IoCloseSharp
            className="close-btn"
            size={35}
            onClick={() => setclick(!click)}
          />
        ) : (
          <IoMenu
            className="HamburgerMenu"
            size={35}
            onClick={() => setclick(!click)}
          />
        )}

        {click && (
          <>
            <div className="w-100 d-flex justify-content-center py-0 my-0">
              <hr className="w-50 py-0 my-0" />
            </div>
            <div className="vstack gap-3">
              <Title heading="Home" link="Home" />
              <Title heading="About" link="About" />
              <Title heading="Timeline" link="Education" />
              <Title heading="Projects" link="Projects" />
              <Title heading="Skills" link="Skills" />
              <Title heading="Contact" link="Contact" />
            </div>
            <div className="w-100 d-flex justify-content-center py-1 my-1">
              <hr className="w-50 py-0 my-0" />
            </div>

            <Button
              onClick={() => {
                handleDownloadCv(PDF_FILE_URL);
              }}
              className="w-50 border-0 sidebar-title d-flex justify-content-start p-0"
              outline
            >
              Download CV
            </Button>
            <div className="w-100 d-flex justify-content-center py-1 my-1">
              <hr className="w-50 py-0 my-0" />
            </div>
            <div className="d-flex justify-content-center ">
              <Link
                to="https://www.linkedin.com/in/adwait-dubey2716"
                target="_blank"
              >
                <Button outline color="secondary" className="mx-1" size="sm">
                  <FaLinkedin size={18} className="mx-2" />
                </Button>
              </Link>

              <Link to="https://leetcode.com/adwait12321/" target="_blank">
                <Button outline color="secondary" className="mx-1" size="sm">
                  <SiLeetcode size={18} className="mx-2" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileView; 