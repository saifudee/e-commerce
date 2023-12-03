/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
    // getTotalPrice();
  }, [cart]);

  const handleCheckout = () => {
    // Redirect to a new page or route for entering Visa card details
    navigate("/checkoutproduct", { state: { totalPrice: price } });
  };

  return (
    <article >
      {cart?.map((item) => (
        <div className="cart_box" key={item.id} >
          <div className="cart_img">
            <img className="img2" src={item.img} />
            <p>{item.title}</p>
          </div>
          <div className="topbot">
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button className="remove" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        {cart.length > 1 && (
          <div className="total-price">
            <strong>Total Price:</strong> {price}
          </div>
        )}
      </div>
      {cart.length > 0 ? (
        <button className="btn btn-primary" id="btn" onClick={handleCheckout}>
          Checkout
        </button>
      ) : (
        <p className="pp">Your cart is empty. Add items to proceed to checkout.</p>
      )}
    </article>
  );
};

export default Cart;
