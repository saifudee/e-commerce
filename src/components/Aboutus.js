import React from "react";
import logo from "./vidstech.png";

function Aboutus() {
  return (
    <>
    <div className="about-container">
      <div className="about-image">
        <img src={logo} alt="About Us" />
      </div>
      <div className="about-content p-2">
        <h1>About Us</h1>
        <p>
          Welcome to Vids Tech ! Your one-stop shop for sensors and electronic parts.Explore our vast collection of components to bring your projects to life.
        </p>
      </div>
    </div>
    </>
  );
}

export default Aboutus;
