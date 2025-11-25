import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ← for navigation
import "./Pages.css";
import americano from "../assets/Americano.png";
import latte from "../assets/latte.png";
import mocha from "../assets/mocha.png";
import caramel from "../assets/caremalmacchiato.png";
import flatwhite from "../assets/freshlybrewedcoffee.png";
import brewed from "../assets/freshlybrewedcoffee.png";
import coldbrew from "../assets/coldbrew.png";
import frappuccino from "../assets/mochafrappuccino.png";
import javachip from "../assets/javachipfrappuccino.png";
import strawberriescream from "../assets/strawberries&cream.png";
import icedmatcha from "../assets/icedmochalatte.png";
import chai from "../assets/chaitealatte.png";
import greentea from "../assets/icedgreentea.png";
import mango from "../assets/mangodragonfruitrefresher.png";
import acai from "../assets/strawberryacairefresher.png";
import hotchocolate from "../assets/signaturehotchocolate.png";
import whitechocolate from "../assets/whiteflatchocolate.png";
import mochalatte from "../assets/mochalatte.png";

const drinksData = [
  { name: "Caffè Americano", price: 3.5, imgUrl: americano },
  { name: "Caffè Latte", price: 4.0, imgUrl: latte },
  { name: "Caffè Mocha", price: 4.5, imgUrl: mocha },
  { name: "Caramel Macchiato", price: 4.5, imgUrl: caramel },
  { name: "Flat White", price: 3.8, imgUrl: flatwhite },
  { name: "Freshly Brewed Coffee", price: 3.0, imgUrl: brewed },
  { name: "Cold Brew", price: 4.2, imgUrl: coldbrew },
  { name: "Mocha Frappuccino", price: 5.0, imgUrl: frappuccino },
  { name: "Java Chip Frappuccino", price: 5.2, imgUrl: javachip },
  { name: "Strawberries & Cream", price: 5.0, imgUrl: strawberriescream },
  { name: "Iced Matcha Latte", price: 4.8, imgUrl: icedmatcha },
  { name: "Chai Tea Latte", price: 4.3, imgUrl: chai },
  { name: "Iced Green Tea", price: 3.9, imgUrl: greentea },
  { name: "Mango Dragonfruit Refresher", price: 4.6, imgUrl: mango },
  { name: "Strawberry Açaí Refresher", price: 4.6, imgUrl: acai },
  { name: "Signature Hot Chocolate", price: 3.7, imgUrl: hotchocolate },
  { name: "White Hot Chocolate", price: 3.9, imgUrl: whitechocolate },
  { name: "Mocha Latte", price: 4.4, imgUrl: mochalatte },
];

function Menu() {
  const { addItem } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    drinksData.reduce((acc, drink) => ({ ...acc, [drink.name]: 0 }), {})
  );

  const navigate = useNavigate(); // ← useNavigate hook

  const increase = (drink) => {
    setQuantities({ ...quantities, [drink.name]: quantities[drink.name] + 1 });
  };

  const decrease = (drink) => {
    if (quantities[drink.name] === 0) return;
    setQuantities({ ...quantities, [drink.name]: quantities[drink.name] - 1 });
  };

  const handleAddAllToCart = () => {
    const selectedDrinks = drinksData.filter((drink) => quantities[drink.name] > 0);

    if (selectedDrinks.length === 0) {
      alert("Please select at least one drink!");
      return;
    }

    // Add all selected drinks to cart
    selectedDrinks.forEach((drink) => {
      for (let i = 0; i < quantities[drink.name]; i++) {
        addItem(drink);
      }
    });

    // Reset quantities
    setQuantities(drinksData.reduce((acc, drink) => ({ ...acc, [drink.name]: 0 }), {}));

    // Navigate to cart page
    navigate("/cart");
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="hero">
        <h1>Our Delicious Menu</h1>
        <p>Explore handcrafted beverages and treats</p>
      </div>

      {/* Menu Grid */}
      <div className="menu-cover">
        {drinksData.map((drink) => (
          <div key={drink.name} className="menu-cover-item">
            <img src={drink.imgUrl} alt={drink.name} />
            <h5 className="menu-item-name">{drink.name}</h5>
          </div>
        ))}
      </div>

      {/* Quantity Selector */}
      <h2 className="text-center mb-4">Select Quantities</h2>
      <div className="row">
        {drinksData.map((drink) => (
          <div className="col-md-6 col-lg-4 mb-4" key={drink.name}>
            <div className="mocha-card-left">
              <img src={drink.imgUrl} alt={drink.name} />
              <div className="mocha-card-content">
                <h5>{drink.name}</h5>
                <p>${drink.price.toFixed(2)}</p>
                <div className="d-flex align-items-center mb-2">
                  <button className="mocha-qty-btn me-2" onClick={() => decrease(drink)}>-</button>
                  <span className="mocha-qty-number">{quantities[drink.name]}</span>
                  <button className="mocha-qty-btn ms-2" onClick={() => increase(drink)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Single Add All to Cart Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg" onClick={handleAddAllToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Menu;
