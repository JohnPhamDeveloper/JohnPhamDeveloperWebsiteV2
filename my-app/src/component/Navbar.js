import React from "react";
import Navitem from "./Navitem";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ICON HERE */}
      <ul className="navbar-list">
        <li>
          <Navitem title="About Me"></Navitem>
        </li>
        <li>
          <Navitem title="Projects"></Navitem>
        </li>
        <li>
          <Navitem title="Contact Me"></Navitem>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
