import "./Cart.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(i)}>Remove ❌</button>
            </div>
          ))}
          <hr />
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout 💳</button>
        </>
      )}
    </div>
  );
};

export default Cart;
