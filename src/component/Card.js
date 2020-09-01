import React from "react";
import "./Card.scss";

const Card = ({ className, title, src, alt, href, width }) => {
  return (
    <a className={"card" + " " + className} href={href} target="_blank" title={title}>
      {/* <h2>{title}</h2> */}
      <img src={src} alt={alt} width={width}></img>
    </a>
  );
};

export default Card;
