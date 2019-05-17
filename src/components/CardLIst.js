import React from "react";
import Card from "./Card";

const CardList = props => (
  <div className="row">
    {props.profiles.map(profile => (
      <Card {...profile} />
    ))}
  </div>
);

export default CardList;
