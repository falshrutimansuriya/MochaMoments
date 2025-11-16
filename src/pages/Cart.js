import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Pages.css";

const Cart = () => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page-container">
      <h2 className="page-title text-center mt-5">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <div className="container mt-4">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3 p-3 shadow">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-secondary me-2" onClick={() => removeItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-secondary ms-2" onClick={() => addItem(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h4 className="text-end mt-3">Total: ${total.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
