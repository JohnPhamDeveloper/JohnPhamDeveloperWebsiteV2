import React from "react";
import "./Card.scss";

const Card = ({ title, src, alt, href }) => {
  return (
    <a className="card" href={href} target="_blank" title={title}>
      {/* <h2>{title}</h2> */}
      <img src={src} alt={alt}></img>
    </a>
  );
};

export default Card;
