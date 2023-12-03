/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo5 from "./vidstech.png";
import logo6 from "./vidstech.png";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <div className="image-card">
        <h2 className="card-title tim">OUR COURSES</h2>
        <div className="card-images">
          <div className="card">
            <img src={logo5} />
          </div>
          <div className="card">
            <img src={logo6} />
          </div>
          <div className="card">
            <img src={logo5} />
          </div>
          <div className="card">
            <img src={logo5} />
          </div>
        </div>
        <Link className="btn btn-primary m-5" to="/loginpage">
          Join Now
        </Link>
      </div>
      <Gallery />
      
    </>
  );
}

export default Content;
