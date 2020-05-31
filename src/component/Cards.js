import React from "react";
import "./Cards.scss";
import Card from "./Card";

const Cards = ({ children }) => {
  return <div className="cards">{children}</div>;
};

export default Cards;
