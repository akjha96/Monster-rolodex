import React from "react";
import "./card.style.css";

export const Card = props => {
  const { id, name } = props.monster;
  return (
    <div className="card-container">
      <img alt="" src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h1>{name}</h1>
    </div>
  );
};
