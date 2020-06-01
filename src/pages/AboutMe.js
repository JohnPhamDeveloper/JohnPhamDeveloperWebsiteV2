import React from "react";
import AudioPlayer from "../component/AudioPlayer";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <main className="main-content">
      {/* Hobbies */}
      <article className="hobbies">
        {/* Title Box */}
        <div className="main-content__title-box">
          <h1 className="main-content__title">Hobbies!</h1>
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
          <p>I also composed music in the past and played all the instruents in the song!</p>
          <AudioPlayer caption="Composed Song: " src="https://websitev2.s3-us-west-1.amazonaws.com/Compose1.wav" />
        </section>
      </article>
    </main>
  );
};

export default AboutMe;
