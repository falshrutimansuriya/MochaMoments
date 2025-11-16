import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="MochaMoments" height="50" className="me-2" />
          <span className="fw-bold text-brown">MochaMoments</span>
        </Link>
        <nav className="ms-auto">
          <Link to="/" className="nav-link d-inline mx-2">Home</Link>
          <Link to="/menu" className="nav-link d-inline mx-2">Menu</Link>
          <Link to="/rewards" className="nav-link d-inline mx-2">Rewards</Link>
            <Link to="/findstore" className="nav-link d-inline mx-2">FindStore</Link>
          <Link to="/about" className="nav-link d-inline mx-2">About</Link>
          <Link to="/contact" className="nav-link d-inline mx-2">Contact</Link>
            <Link to="/payment" className="nav-link d-inline mx-2">Payment</Link>
             <Link to="/corporateOrders" className="nav-link d-inline mx-2">Corporate-Orders</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
