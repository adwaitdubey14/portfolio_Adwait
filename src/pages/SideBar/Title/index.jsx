import React from "react";

const Title = ({ heading, link }) => {
  return (
    <div className=" pb-2 ">
      <a href={`#${link}`} className="sidebar-title">
        {heading}
      </a>
    </div>
  );
};

export default Title;
