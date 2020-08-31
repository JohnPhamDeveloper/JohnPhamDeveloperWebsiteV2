import React from "react";
import "./Skills.scss";

const Projects = () => {
  return (
    <main className="main-content">
      <div className="main-content__title-box">
        <h1 className="main-content__title">Skills</h1>
      </div>

      <div className="skill-block">
        <h2>Main Skills</h2>
        <div className="skill-list">
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Jest</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flexbox</li>
            <li>CSSGrid</li>
            <li>SASS/SCSS</li>
            <li>GSAP</li>
            <li>WebSocket</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>

      <div className="skill-block">
        <h2>Experimental skills</h2>
        <div className="skill-list">
          <ul>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Docker</li>
            <li>EC2</li>
            <li>GastbyJS</li>
            <li>Cypress</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Projects;
