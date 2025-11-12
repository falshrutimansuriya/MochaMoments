import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MenuPage from '../pages/MenuPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CartPage from '../pages/CartPage';
import NotFound from '../components/NotFound';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;