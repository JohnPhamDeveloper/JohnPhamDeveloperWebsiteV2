import React from "react";
import Navitem from "./Navitem";
import "./Navbar.scss";

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">{children}</ul>
    </nav>
  );
};

export default Navbar;
