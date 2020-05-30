import React from "react";
import "./Cards.scss";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards">
      <Card title="Project 1" />
      <Card title="Project 2" />
      <Card title="Project 3" />
    </div>
  );
};

export default Cards;
