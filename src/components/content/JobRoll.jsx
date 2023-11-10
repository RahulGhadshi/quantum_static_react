import React from "react";
import "../../style/jobroll.css";

export default function JobRoll(props) {
  let img_str;
  if (props.roll == "Instructional Designer") {
    img_str = "Instructional Designer.svg";
  } else if (props.roll == "Software Engineer") {
    img_str = "Software Quality Engineer.svg";
  } else if (props.roll == "Software Quality Engineer") {
    img_str = "Software Quality Engineer.svg";
  } else {
    img_str = "Instructional Designer.svg";
  }

  return (
    <div className="jobroll">
      <img src={`.../../../src/assets/${img_str}`} alt="job-icon" />
      {props.roll}
    </div>
  );
}
