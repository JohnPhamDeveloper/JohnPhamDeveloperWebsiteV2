import React from "react";
import "./App.scss";
import Header from "./component/Header";
import Cards from "./component/Cards";
import AudioPlayer from "./component/AudioPlayer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>My Past Projects!</h1>
        <p>Add black box cover font then show</p>
        <Cards />
        <article>
          <h1>Hobbies</h1>
          <section>
            <h2>Singing</h2>
            <p>A few short clips of Japanese songs I've covered in English!</p>
            <AudioPlayer caption="Cover Song 1: " src="https://websitev2.s3-us-west-1.amazonaws.com/Cover1.wav" />
            <AudioPlayer caption="Cover Song 2: " src="https://websitev2.s3-us-west-1.amazonaws.com/Cover2.wav" />
            <AudioPlayer caption="Cover Song 3: " src="https://websitev2.s3-us-west-1.amazonaws.com/Cover3.wav" />
          </section>
          <section>
            <h2>Composing</h2>
            <p>I also composed music in the past and played all the instruents in the song!</p>
            <AudioPlayer caption="Composed Song: " src="https://websitev2.s3-us-west-1.amazonaws.com/Compose1.wav" />
          </section>
        </article>
      </main>
      {/* FOOTER */}
    </div>
  );
};

export default App;
