import React from "react";
import Cards from "../component/Cards";
import Card from "../component/Card";
import gameImage from "../asset/game.png";
import photographyImage from "../asset/len.png";
import appImage from "../asset/cosplay.jpg";
import "./Projects.scss";

const Projects = () => {
  return (
    <main className="main-content">
      <div className="projects">
        <div className="main-content__title-box">
          <h1 className="main-content__title">Past Projects</h1>
        </div>

        <Cards>
          <Card
            className="card__project--1"
            title="Convention Mobile App"
            src={appImage}
            alt="Convention mobile app project"
            href="https://github.com/JohnPhamDeveloper/Convention_app"
          />
          <Card
            className="card__project--2"
            title="Photographer Website"
            src={photographyImage}
            alt="Photographer website Project"
            href="https://github.com/JohnPhamDeveloper/helenphotography"
          />
          <Card
            className="card__project--3"
            title="Pixel Shooter"
            src={gameImage}
            alt="Pixel shooter game project"
            href="https://simmer.io/@JohnPhamDev/~b9700b43-3bfb-6c88-7598-a8ac2ca19098"
          />
        </Cards>
      </div>
    </main>
  );
};

export default Projects;
