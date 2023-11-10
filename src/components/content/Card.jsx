import React from "react";
import JobRoll from "./JobRoll";
import "../../style/card.css";
import { nanoid } from "nanoid";

export default function Card(props) {
  const jobrolldesc = props.jobRolls.map((data) => {
    return <JobRoll roll={data} key={nanoid()} />;
  });

  function expiryDaysCount() {
    var date1 = new Date();
    var date2 = new Date(props.startDate);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Math.round(
      Difference_In_Time / (1000 * 3600 * 24)
    );
    return Difference_In_Days;
  }

  return (
    <div className="card">
      {expiryDaysCount() < 10 && (
        <label className="expiry-days">
          Expires in {expiryDaysCount()} days
        </label>
      )}
      <div className="general-info">
        <div className="job-title">{props.title}</div>
        <div className="date-text">Date & time:</div>
        <div className="date-loc">
          <div className="date">
            {props.startDate} to {props.endDate}
          </div>
          <div className="separator"> | </div>
          <img
            src="../../../src/assets/location_on_black_24dp.svg"
            alt="location-icon"
          />
          <div className="location">{props.location}</div>
        </div>
      </div>
      <div className="jobroll-info">
        <div className="roll-text">Job Roles: </div>
        <div className="jobrolls">{jobrolldesc}</div>
      </div>
      {props.internshipFlag && (
        <label className="intern-text">
          Internship Opportunity for MCA Students
        </label>
      )}
      <div className="more-details">
        <button className="more-details-btn">View More Details</button>
      </div>
    </div>
  );
}
