import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Pages.css";

const Cart = () => {
  const { cartItems, addItem, removeItem, getTotal } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, i) => (
            <div className="card mb-3 p-3 shadow d-flex justify-content-between align-items-center" key={i}>
              <div>
                <h5>{item.name}</h5>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-secondary me-2" onClick={() => removeItem(item.name)}>-</button>
                <span>{item.quantity}</span>
                <button className="btn btn-secondary ms-2" onClick={() => addItem(item)}>+</button>
              </div>
            </div>
          ))}
          <h4 className="text-end mt-3">Total: ${getTotal().toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
