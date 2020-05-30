import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import Navitem from "./Navitem";

const Header = () => {
  return (
    <div className="header">
      <div className="header-icon" style={{ backgroundColor: "orange", width: "50px", height: "50px" }}>
        ICON
      </div>
      <Navbar>
        <Navitem title="About Me"></Navitem>
        <Navitem title="Projects"></Navitem>
        <Navitem title="Contact Me"></Navitem>
      </Navbar>
    </div>
  );
};

export default Header;
