import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItem from './components/MenuItem';

const Menu = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/data/menu.json')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading menu...</p>;
  }

  return (
    <section>
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;