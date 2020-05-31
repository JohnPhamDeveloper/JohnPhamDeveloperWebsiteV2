import React from "react";
import "./Card.scss";

const Card = ({ title, src, alt }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={src} alt={alt}></img>
    </div>
  );
};

export default Card;
