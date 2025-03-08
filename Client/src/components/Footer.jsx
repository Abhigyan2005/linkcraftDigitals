import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/linkcraft-logo.png"
import "../css/App.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/subscribe", {
        email,
      });

      setMessage(response.data.message); 
      setEmail(""); 
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <footer>
      <div className="parent-container">
        <div className="footer-top">
          <div>
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="top-left">
            <span>Ready to get started?</span>
            <span>
              <button className="btn1">Let's Talk</button>
            </span>
          </div>
        </div>
      </div>
      <div className="separation"></div>
      <div className="footer-mid">
        <div className="item-container">
          <div className="item">
            <span>Let's Connect</span>
            <div className="mid-text">Build. Grow. Dominate.</div>
            <div className="mid-text">
              Email us at:{" "}
              <strong className="green">linkcrafts.digitals@gmail.com</strong>
            </div>
            <div className="mid-text">
              Contact me at: <strong className="green">+918700061725</strong>
            </div>
          </div>

          <div className="item">
            <span>Services</span>
            <ul className="service-list">
              <li>Web Development</li>
              <li>Graphic Designing</li>
              <li>Video Editing</li>
              <li>Lead Generation</li>
              <li>Social Media Management</li>
              <li>Funnel building</li>
            </ul>
          </div>

          <div className="newsletter">
            <div>Want to Know what we're up to? Sign up for our newsletter</div>
            <div className="subscribe-container">
              <input
                className="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <button className="btn3" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
            {message && <div className="message">{message}</div>}
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="end-container">
          <div className="c">
            <div>©LinkCraft 2025</div>
            <div>All Rights Reserved</div>
          </div>
          <div className="socials">
            <a href="https://www.instagram.com/linkcraft_digitals/">
              <img
                src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/5f9f27dad21fa8c5f9bc6469_004-instagram.svg"
                alt="instagram"
              />
            </a>

            <a href="">
              <img
                src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/5f9f27dad21fa81860bc6468_003-twitter.svg"
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="separation"></div>
    </footer>
  );
}

export default Footer;
