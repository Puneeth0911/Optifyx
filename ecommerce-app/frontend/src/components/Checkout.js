import "./Checkout.css";
import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart }) => {
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleFakePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      navigate("/success");
    }, 2000); // 2-second fake "processing"
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h2>💳 Fake Checkout</h2>
      <p>Total Amount: <strong>${total.toFixed(2)}</strong></p>

      {!processing ? (
        <>
          <p>This is a test payment screen. No money will be deducted.</p>
          <button onClick={handleFakePayment}>Pay Now (Demo Mode)</button>
        </>
      ) : (
        <p>Processing Payment... ⏳</p>
      )}
    </div>
  );
};

export default Checkout;
