import React from "react";
import { Link } from "react-router-dom";
import { TweenLite, TimelineLite, Power1, CSSRulePlugin } from "gsap/all";
import "./Navitem.scss";

const Navitem = ({ title, to }) => {
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
  return (
    <li>
      <Link to={to}>
        <div className="nav-item">
          <p className="nav-item__title">{title}</p>
          <div className="nav-item__line" />
        </div>
      </Link>
    </li>
  );
};

export default Navitem;
