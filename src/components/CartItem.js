import React from 'react';

const CartItem = ({ item }) => (
  <div className="cart-item">
    <h4>{item.name}</h4>
    <span>${item.price.toFixed(2)}</span>
  </div>
);

export default CartItem;