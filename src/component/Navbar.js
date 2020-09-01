import React from "react";

import "./Navbar.scss";

const Navbar = ({ className, ulClassName, children, onClick }) => {
  return (
    <nav className={`${className}`} onClick={onClick}>
      <ul className={`${ulClassName}`}>{children}</ul>
    </nav>
  );
};

export default Navbar;
