import React from "react";
import { Link } from "react-router-dom";
import { TweenLite, TimelineLite, Power1, CSSRulePlugin } from "gsap/all";
import "./Navitem.scss";

const Navitem = ({ title, to, isLink = true }) => {
  // const animateHeaderUp = () => {
  //   // App.scss has animation delay, so we bring it up...
  //   // Then drop it back down
  //   // -webkit-box-shadow: 23px 24px 43px -11px rgba(92, 92, 92, 0.25);
  //   // -moz-box-shadow: 23px 24px 43px -11px rgba(92, 92, 92, 0.25);
  //   // box-shadow: 23px 24px 43px -11px rgba(92, 92, 92, 0.25);
  //   // Use rule here since we want psuedoelement to reduce boxshadow lag animation
  //   const bodyAfter = CSSRulePlugin.getRule("body:after");
  //   const timeline = new TimelineLite();
  //   timeline
  //     .to(bodyAfter, 0.5, { ease: Power1.easeInOut, opacity: 0 })
  //     .to("body", 0.8, { ease: Power1.easeInOut, height: "200px" })
  //     .to("body", 0.8, { ease: Power1.easeInOut, height: "1000px" })
  //     .to(bodyAfter, 0.5, { ease: Power1.easeInOut, opacity: 1 });
  // };

  const scrollToTop = () => {
    window.scrollTo(0, 110);
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
