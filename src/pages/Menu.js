import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ← THIS IS IMPORTANT
import "./Pages.css";
import americano from "../assets/Americano.png";
import latte from "../assets/latte.png";
import mocha from "../assets/mocha.png";
import caramel from "../assets/caremalmacchiato.png";
import flatwhite from "../assets/flatwhite.png";
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

  const navigate = useNavigate(); // hook for navigation

  const increase = (drink) => {
    setQuantities({ ...quantities, [drink.name]: quantities[drink.name] + 1 });
  };

  const decrease = (drink) => {
    if (quantities[drink.name] === 0) return;
    setQuantities({ ...quantities, [drink.name]: quantities[drink.name] - 1 });
  };

  const handleAddToCart = (drink) => {
    const qty = quantities[drink.name];
    if (qty === 0) {
      alert("Please select at least 1 item to add to cart!");
      return;
    }

    // Add the selected quantity to cart
    for (let i = 0; i < qty; i++) {
      addItem(drink);
    }

    // Reset the quantity selector
    setQuantities({ ...quantities, [drink.name]: 0 });

    // Navigate to cart page
    navigate("/cart");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Menu</h1>
      <div className="row">
        {drinksData.map((drink, i) => (
          <div className="col-md-6 col-lg-4 mb-4" key={i}>
            <div className="card shadow h-100">
              <img src={drink.imgUrl} className="card-img-top" alt={drink.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{drink.name}</h5>
                <p className="card-text">${drink.price.toFixed(2)}</p>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <button className="btn btn-secondary me-2" onClick={() => decrease(drink)}>-</button>
                  <span className="mx-2">{quantities[drink.name]}</span>
                  <button className="btn btn-secondary ms-2" onClick={() => increase(drink)}>+</button>
                </div>
                {/* Add to Cart button */}
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleAddToCart(drink)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
