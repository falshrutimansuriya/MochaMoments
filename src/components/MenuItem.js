import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-item">
      <img
        src={item.image}
        alt={item.name}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <span style={{ fontWeight: 'bold' }}>${item.price.toFixed(2)}</span>
      <button onClick={() => addToCart(item)} style={{ marginTop: '10px' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;