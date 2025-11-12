import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <section>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </section>
  );
};

export default Cart;