import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item or increase quantity
  const addItem = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Decrease quantity, remove if 0
  const removeItem = (itemName) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.name === itemName
            ? { ...i, quantity: i.quantity > 0 ? i.quantity - 1 : 0 }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};
