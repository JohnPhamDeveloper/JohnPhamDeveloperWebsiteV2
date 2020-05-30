import React from "react";
import "./Navitem.scss";

const Navitem = ({ title }) => {
  return (
    <li>
      <div className="nav-item">
        <p className="nav-item__title">{title}</p>
        <div className="nav-item__line" />
      </div>
    </li>
  );
};

export default Navitem;
