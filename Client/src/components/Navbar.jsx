import React from "react";
import "../css/App.css";
import logo from "../assets/linkcraft-logo.png"
function Navbar() {
  return (
    <>
      <div className="navContainer">
        <nav>
          <div className="company">
           <img src={logo} className="logo" alt="Logo" />
           <span>LinkCraft Digitals</span>
          </div>

          <ul>
            <li className="no"><a className="navlink" href="#about">About Us</a></li>
            <li className="no"><a className="navlink" href="#services">Services</a></li>
          </ul>

          <div>
            <a href="#contact"><button className="contact-btn">Contact Us</button></a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
