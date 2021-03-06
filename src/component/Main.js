import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import Skills from "../pages/Skills";

const Main = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={React.Fragment}>
      <CSSTransition key={location.key} timeout={1000} classNames="page" unmountOnExit>
        <Switch location={location}>
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact-me" component={ContactMe} />
          <Route exact path="/skills" component={Skills} />
          <Route component={AboutMe} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Main;
