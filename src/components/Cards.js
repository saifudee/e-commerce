/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
// /* eslint-disable jsx-a11y/img-redundant-alt */
import React  from "react";
import "../styles/cards.css";
import { Link } from "react-router-dom";


const Cards = ({ item, handleClick, isProductPage, isReadMore }) => {
  const { title, price, img } = item;
  return (
    <>
      <div className="product-card">
        <img
          className={`product-image ${
            isProductPage ? "small-size" : "normal-size"
          }`}
          src={img}
          alt="Image"
        />
        <div className="details">
          {isReadMore && (
            <>
              <div className="product-title">{title}</div>
              <div className="product-price">Price:{price}</div>
              <Link to={`/product/${item.id}`}>Read More</Link>
            </>
          )}
          {isProductPage && (
            <>
              <button
                className="btn btn-primary"
                onClick={() => handleClick(item)}
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
