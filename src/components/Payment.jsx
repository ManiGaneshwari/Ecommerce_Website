import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNumber && expiry && cvv) {
      alert("Payment successful! Thank you for your purchase.");
      localStorage.setItem("cart", JSON.stringify([]));
      navigate("/");
    } else {
      alert("Please fill in all payment details.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Payment Details</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          <button type="submit">Confirm Payment</button>
        </form>
        <button className="back-to-cart-btn" onClick={() => navigate("/cart")}>
          Back to Cart
        </button>
      </div>
    </div>
  );
};

export default Payment;
