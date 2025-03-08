import React from "react";
import webd from "../assets/webd.png";
import graphic from "../assets/graphic.svg";
import video from "../assets/videdit.svg";
import funnel from "../assets/funnel.png";
import leadGen from "../assets/lead.svg";
import smma from "../assets/smm.png";

function Services() {
  return (
    <>
      <section id="services" className="service-container">
        <h1>Services</h1>

        <div className="list">
          <div className="ImgNtext hidden">
            <img src={webd} alt="webdev" className="list-imgs" />
            <span>Web Development</span>
          </div>

          <div className="ImgNtext hidden">
            <img src={graphic} alt="graphic" className="list-imgs" />
            <span>Graphic Designing</span>
          </div>

          <div className="ImgNtext hidden">
            <img src={video} alt="video" className="list-imgs" />
            <span>Video Editing</span>
          </div>

          <div className="ImgNtext hidden">
            <img src={funnel} alt="funnel" className="list-imgs" />
            <span>Funnel Building</span>
          </div>

          <div className="ImgNtext hidden">
            <img src={leadGen} alt="leadGen" className="list-imgs" />
            <span>Lead Generation</span>
          </div>

          <div className="ImgNtext hidden">
            <img src={smma} alt="smma" className="list-imgs" />
            <span>Social Media Management</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
