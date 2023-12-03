/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable-next-line */

import React from "react";
import img from "./images/ar21.jpg";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const productPage = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="text-image-container">
        <div className="text-container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p className="intro-data">Welcome to </p>
              <h1 className="namecom">VIDS TECH</h1>
              <p>
                Your one-stop shop for sensors and electronic parts.Explore our
                vast collection of components to bring your projects to life.
              </p>
              <button className="btn btn-primary" onClick={productPage}>
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="hero-section-image">
          <figure>
            <img src={img} alt="hero-section-photo" className="img-style" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default App;
