import React, { useState, useEffect } from "react";
import Navitem from "./Navitem";

import "./Navbar.scss";

const Navbar = ({ className, ulClassName, children, onClick }) => {
  return (
    <nav className={`${className}`} onClick={onClick}>
      <ul className={`${ulClassName}`}>{children}</ul>
    </nav>
  );
};

export default Navbar;
