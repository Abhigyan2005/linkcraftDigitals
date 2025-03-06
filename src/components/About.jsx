import React from "react";
import aboutImg from "../assets/about.png";

function About() {
  return (
     <section id="about" className="parent-container gap">
      <div className="containerL">
        <img src={aboutImg} alt="" className="aboutimg" />
      </div>
      <div className="containerR gap-2">
        <h1>About LinkCraft</h1>
        <p className="textAbout">
          <p>
            At LinkCraft, we turn ideas into impactful digital experiences.
            Whether it’s crafting stunning designs, building high-converting
            websites, or scaling brands through strategic marketing, we help
            businesses thrive in the digital world.
          </p>
          <p>
            With a passion for innovation and a results-driven approach, we
            specialize in web development, funnel building, graphic design,
            video editing, lead generation, and social media management. Our
            mission is simple—empower brands to grow, engage, and convert.
          </p>
        </p>
      </div>
    </section>
  );
}

export default About;
