import React from "react";
import Navbar from "./Navbar";
import heroImg from "../assets/hero-img.svg"
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
              <button className="btn1"><a href="#about">About us</a></button>
              <button className="btn2"><a href="#contact">Get Started</a></button>
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
