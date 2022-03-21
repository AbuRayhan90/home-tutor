import React from "react";
import "./style.css";

const Heading = ({ heading1, heading2, heading3, color }) => {
  return (
    <h1 className={`heading ${color}`}>
      {heading1} <span> {heading2} </span> <br />
      {heading3}
    </h1>
  );
};

export default Heading;
