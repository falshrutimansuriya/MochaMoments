import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuItem from '../components/MenuItem';

const MenuPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/data/menu.json')
      .then(res => setItems(res.data))
      .catch(err => console.error('Error fetching menu:', err));
  }, []);

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

export default MenuPage;