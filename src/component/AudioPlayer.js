import React from "react";
import "./AudioPlayer.scss";

const AudioPlayer = ({ caption, src }) => {
  return (
    <figure>
      <figcaption>{caption}</figcaption>
      <audio controls src={src}>
        Your browser doesn't support the <code>Audio</code> player!
      </audio>
    </figure>
  );
};

export default AudioPlayer;
