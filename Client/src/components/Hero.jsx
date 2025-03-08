import React from "react";
import Navbar from "./Navbar";
import heroImg from "../assets/hero-img.svg";
function Hero() {
  return (
    <>
      <Navbar />
      <section className="parent-container">
        <div className="containerL">
          <div className="hero-txt">
            We handle everything your business needs to scale.
          </div>
          <div className="hero-btns">
            <a href="#about">
              {" "}
              <button className="btn1">About us</button>
            </a>
            <a href="#contact">
              <button className="btn2">Get Started</button>
            </a>
          </div>
        </div>
        <div className="containerR">
          <img src={heroImg} alt="" className="heroimg" />
        </div>
      </section>
    </>
  );
}

export default Hero;
