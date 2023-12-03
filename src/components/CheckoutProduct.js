// CheckoutPage.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const {totalPrice} = location.state;
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [showThanksPopup, setShowThanksPopup] = useState(false);
 
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your payment processing logic here
    // For simplicity, we'll just log the card details
    console.log("Card Details:", cardDetails);
  };
  const handlePayment = (e) => {
    e.preventDefault();
    // Implement your payment processing logic here
    // For simplicity, we'll just log the card details
    console.log("Card Details:", cardDetails);
    // Show the thanks pop-up
    setShowThanksPopup(true);
    setTimeout(() => {
      setShowThanksPopup(false);
    },2000);
  };

  return (
    <>
      <div className="product-container mnm">
        <form onSubmit={handleSubmit}>
          <div className="payment-card mnm">
          <div>
          <strong>Total Price:</strong> {totalPrice}
        </div>
            <div>Payment Details:</div>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="text"
                name="expirationDate"
                value={cardDetails.expirationDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                placeholder="***"
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handlePayment}
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>

      {showThanksPopup && (
        <div className="thanks-popup">
          <p>Thank you for your payment!</p>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
