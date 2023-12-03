/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useParams } from "react-router-dom";
import list from "../data";
import { useState } from "react";

const ReadMore = () => {
  // const navigate = useNavigate()
  const { productId } = useParams();
  const product = list.find((item) => item.id === parseInt(productId, 10));
  const [showFullDescription, setShowFullDescription] = useState(false);
  if (!product) {
    return <div>Product not found.</div>;
  }
  //   const handleAddToCart = () => {
  //     navigate('/product')
  //   };
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <>
      <div className="text-image-container">
        <div className="text-container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <h2>{product.title}</h2>
              <p className="des">Price: ${product.price}</p>
              <p className="des">
            {product.des &&
              (showFullDescription
                ? product.des
                : `${product.des.slice(0, 100)}...`)}
          </p>

          {product.des && product.des.length > 100 && (
            <a href='#' onClick={toggleDescription} style={{textDecoration:"none"}}>
              {showFullDescription ? "Read Less" : "Read More"}
            </a>
          )}
              <div className="card-images cardmov">
                <div className="card cardwid">
                  <img
                    className="imgsize1"
                    src={product.img}
                    alt={product.title}
                  />
                </div>
                <div className="card cardwid">
                  <img
                    className="imgsize1"
                    src={product.img}
                    alt={product.title}
                  />
                </div>
                <div className="card cardwid">
                  <img
                    className="imgsize1"
                    src={product.img}
                    alt={product.title}
                  />
                </div>
                <div className="card cardwid">
                  <img
                    className="imgsize1"
                    src={product.img}
                    alt={product.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-image">
          <div className="card cardwid">
            <img className="imgsize2" src={product.img} alt={product.title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
