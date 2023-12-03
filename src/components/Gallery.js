// /* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable react/style-prop-object */
// /* eslint-disable jsx-a11y/alt-text */
import React from "react";
import SixItems from "./SixItems";

// import CryptoList from "./CryptoList";
// import Data from "./Data";
function Gallery() {
  return (
    <>
      <h1 className="topa">Our Products</h1>
      <div className="Banner2">
        <div className="data">
          <SixItems />
        </div>
      </div>

      <h2 className="Banner2">
        <ul>
          <li>
            <a
              href="https://instagram.com/vidstech.in?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <h1>Follow us on Instagram</h1>
          </li>
        </ul>
      </h2>
    </>
  );
}

export default Gallery;
