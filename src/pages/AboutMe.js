import React from "react";
import AudioPlayer from "../component/AudioPlayer";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <main className="main-content">
      <article className="about">
        {/* About */}
        <div className="main-content__title-box">
          <h1 className="main-content__title">About</h1>
        </div>
        <p>
          I'm an aspiring Web Developer & VR enthusiast who loves messing around with new technology! Even though my main focus is web development, I
          have the capability to learn new skill sets required for different projects. Outside of that, I love composing music, singing covers,
          guitar, bass, tennis, indie games, stylish clothing, weightlifting, photography, and dance!
        </p>
        {/* Hobbies */}
        <div className="main-content__title-box">
          <h1 className="main-content__title">Hobbies</h1>
        </div>
        {/* Singing */}
        <section>
          <h2>Singing</h2>
          <p>A few short clips of Japanese songs I've covered in English!</p>
          <AudioPlayer caption="Cover Song 1: " src="https://websitev2.s3-us-west-1.amazonaws.com/Cover1.wav" />
          <AudioPlayer caption="Cover Song 2: " src="https://websitev2.s3-us-west-1.amazonaws.com/Cover2.wav" />
          <AudioPlayer caption="Cover Song 3: " src="https://websitev2.s3-us-west-1.amazonaws.com/Cover3.wav" />
        </section>
        {/* Composing */}
        <section>
          <h2>Composing</h2>
          <p>I also composed music in the past and played all the instruments in this song!</p>
          <AudioPlayer caption="Composed Song: " src="https://websitev2.s3-us-west-1.amazonaws.com/Compose1.wav" />
        </section>
      </article>
    </main>
  );
};

export default AboutMe;
