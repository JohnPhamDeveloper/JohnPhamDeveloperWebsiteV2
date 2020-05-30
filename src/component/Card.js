import React from "react";
import "./Card.scss";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>Image here</div>
    </div>
  );
};

export default Card;