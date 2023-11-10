import React from "react";
import Card from "./Card";
import "../../style/openings.css";
import data from  "../../data"

const details = data.map(data => {
  return (
      <Card
          key={data.id}
          {...data}
      />
  )
})

export default function Openings() {
  return (
    <div className="openings">
      {details}
    </div>
  );
}