import React from "react";
import { Link } from "react-router-dom";
// import useWindowSize from "../useWindowSize";
import "./Navitem.scss";

const Navitem = ({ title, to, isLink = true }) => {
  // const size = useWindowSize();

  const scrollToTop = () => {
    // if (size.width <= 600) {
    //   window.scrollTo(0, 0);
    // } else if (size.width <= 750) {
    //   window.scrollTo(0, 20);
    // } else {
    //   window.scrollTo(0, 110);
    // }
    window.scrollTo(0, 0);
  };

  const renderLink = () => {
    return (
      <Link to={to} onClick={scrollToTop}>
        <div className="nav-item">
          <p className="nav-item__title">{title}</p>
          <div className="nav-item__line" />
        </div>
      </Link>
    );
  };

  // Button that does not switch route
  const renderNonLink = () => {
    return (
      <a href="https://websitev2.s3-us-west-1.amazonaws.com/resumeWebsite.pdf" rel="noreferrer" target="_blank" aria-label="Resume" className="link">
        <div className="nav-item">
          <p className="nav-item__title">{title}</p>
          <div className="nav-item__line" />
        </div>
      </a>
    );
  };

  return <li>{isLink ? renderLink() : renderNonLink()}</li>;
};

export default Navitem;
