import React from "react";
import "../css/App.css";
import logo from "../assets/linkcraft-logo.jpg"
function Navbar() {
  return (
    <>
      <div className="navContainer">
        <nav>
          <div>
           <img src={logo} className="logo" alt="Logo" />
          </div>

          <ul>
            <li><a  className="navlink" href="">Company</a></li>
            <li><a className="navlink" href="#about">About Us</a></li>
            <li><a className="navlink" href="#services">Services</a></li>
          </ul>
          
          <div>
            <button className="contact-btn">Contact Us</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
