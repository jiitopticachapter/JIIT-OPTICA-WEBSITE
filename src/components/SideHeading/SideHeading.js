import "./SideHeading.scss";
import React from "react";

const SideHeading = (props) => {
  return (
    <div className="side_heading">
      <h1>{props.side_heading}</h1>
      <p>{props.side_content}</p>
    </div>
  );
};

export default SideHeading;
