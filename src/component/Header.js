import React, { useState, useEffect, useRef } from "react";
import useScroll from "../useScroll";
import "./Header.scss";
import Navbar from "./Navbar";
import Navitem from "./Navitem";
import logo from "../asset/logo.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const currentScrollYPosition = useScroll();
  const headerRef = useRef(null);

  // Sticky header move to new function
  const isScrolledPastStickyElement = (stickyRef, currentScrollY) => {
    if (stickyRef.current) {
      const stickyRefBoundsY = stickyRef.current.getBoundingClientRect().top;
      // console.log(`BOUND: ${stickyRefBoundsY}`);
      return stickyRefBoundsY <= 0;
    }

    return false;
  };

  // If this element is scrolled past, insert the 'sticky' class name to trigger CSS code
  const insertSticky = () => {
    return isScrolledPastStickyElement(headerRef, currentScrollYPosition) ? "sticky" : "";
  };

  useEffect(() => {
    if (isScrolledPastStickyElement(headerRef, currentScrollYPosition)) {
    }
  }, [currentScrollYPosition]);

  const getMenuActiveName = () => {
    if (menuActive) {
      return "is-active";
    }

    return "";
  };

  return (
    <div className={`header ${insertSticky()}`} ref={headerRef}>
      <img className="header-logo" src={logo}></img>
      <Navbar>
        <Navitem title="About Me" to="/about-me"></Navitem>
        <Navitem title="Projects" to="/projects"></Navitem>
        <Navitem title="Contact Me" to="/contact-me"></Navitem>
        <Navitem title="Skills" to="/skills"></Navitem>
      </Navbar>
      <a href="https://github.com/JohnPhamDeveloper/" target="_blank">
        <svg className="github-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>GitHub icon</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      </a>

      {/* Hamburger only renders on small windows */}
      <button class={`hamburger hamburger--elastic ${getMenuActiveName()}`} type="button" onClick={() => setMenuActive(!menuActive)}>
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Header;
