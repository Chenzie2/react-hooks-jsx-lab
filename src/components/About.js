import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this!</p> {/* Add any content you'd like */}
      <img src={image} alt="I made this" /> {/* Display image */}
    </div>
  );
}

export default About;
