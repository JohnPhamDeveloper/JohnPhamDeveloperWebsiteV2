import React from "react";
import Cards from "../component/Cards";
import Card from "../component/Card";
import gameImage from "../asset/game.png";
import photographyImage from "../asset/len.png";
import appImage from "../asset/cosplay.png";
import "./Projects.scss";

const Projects = () => {
  return (
    <main className="main-content">
      <div className="main-content__title-box">
        <h1 className="main-content__title">My Past Projects</h1>
      </div>

      <Cards>
        <Card
          title="Convention Mobile App"
          src={appImage}
          alt="Convention mobile app project"
          href="https://github.com/JohnPhamDeveloper/Convention_app"
        />
        <Card
          title="Photographer Website"
          src={photographyImage}
          alt="Photographer website Project"
          href="https://github.com/JohnPhamDeveloper/Convention_app"
        />
        <Card
          title="Pixel Shooter"
          src={gameImage}
          alt="Pixel shooter game project"
          href="https://simmer.io/@JohnPhamDev/~b9700b43-3bfb-6c88-7598-a8ac2ca19098"
        />
        {/*  */}
      </Cards>
    </main>
  );
};

export default Projects;
