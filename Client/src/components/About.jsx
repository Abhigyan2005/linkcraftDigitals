import React from "react";
import aboutImg from "../assets/about.png";

function About() {
  return (
    <section id="about" className="parent-container gap">
      <div className="containerR gap-2">
        <h1>About LinkCraft</h1>
        <div className="textAbout">
          <div>
            At LinkCraft, we turn ideas into impactful digital experiences.
            Whether it’s crafting stunning designs, building high-converting
            websites, or scaling brands through strategic marketing, we help
            businesses thrive in the digital world.
          </div>
          <div>
            With a passion for innovation and a results-driven approach, we
            specialize in web development, funnel building, graphic design,
            video editing, lead generation, and social media management. Our
            mission is simple—empower brands to grow, engage, and convert.
          </div>
        </div>
      </div>
      <div className="containerL">
        <img src={aboutImg} alt="About LinkCraft" className="aboutimg" />
      </div>
    </section>
  );
}

export default About;
