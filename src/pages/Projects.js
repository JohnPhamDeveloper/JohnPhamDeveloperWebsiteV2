import React from "react";
import Cards from "../component/Cards";
import Card from "../component/Card";
import testImage from "../asset/logo.png";

const Projects = () => {
  return (
    <main className="main-content">
      <div className="main-content__title-box">
        <h1 className="main-content__title">My Past Projects!</h1>
      </div>

      <Cards>
        <Card
          title="Project 1"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d2f8269-4ed2-4c48-820e-3d57ca7c7686/dcx1muk-81a31f37-fcb0-48f7-88a8-dfae36801ec8.png/v1/fill/w_1192,h_670,q_70,strp/say_it___yorushika_by_skyfang2414_dcx1muk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvOGQyZjgyNjktNGVkMi00YzQ4LTgyMGUtM2Q1N2NhN2M3Njg2XC9kY3gxbXVrLTgxYTMxZjM3LWZjYjAtNDhmNy04OGE4LWRmYWUzNjgwMWVjOC5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AHtQ_bl8ZIz-mfS37M4f-Pt9sbT9Vnx3RsyI8ixIaNE"
          alt="alt text"
        />
        <Card
          title="Project 2"
          src="https://1.bp.blogspot.com/-v51mi-IOosM/XUxgEfSYh7I/AAAAAAAABGA/WeFMa4C6TcY7TtC3tZd4xiJIppW1jkh7QCLcBGAs/s1600/Yorushika%2B-%2Bame%2Bto%2Bcappucino.jpg"
          alt="alt text"
        />
        <Card title="Project 3" src="https://miro.medium.com/max/3840/1*bKlVmOGRWFqiKYuK_0kCxw.png" alt="alt text" />
      </Cards>
    </main>
  );
};

export default Projects;
