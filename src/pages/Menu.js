import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Pages.css";

const drinksData = [
  { name: "Caffè Americano", price: 3.5, imgUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" },
  { name: "Caffè Latte", price: 4.0, imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { name: "Caffè Mocha", price: 4.5, imgUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80" },
  { name: "Caramel Macchiato", price: 4.5, imgUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80" },
  { name: "Flat White", price: 3.8, imgUrl: "https://images.unsplash.com/photo-1617196034339-3f63f3b74f8f?auto=format&fit=crop&w=800&q=80" },
  { name: "Freshly Brewed Coffee", price: 3.0, imgUrl: "https://images.unsplash.com/photo-1525042197812-701aebc1cbfb?auto=format&fit=crop&w=800&q=80" },
  { name: "Cold Brew", price: 4.2, imgUrl: "https://images.unsplash.com/photo-1598511728754-0c3f1d5e7895?auto=format&fit=crop&w=800&q=80" },
  { name: "Mocha Frappuccino", price: 5.0, imgUrl: "https://images.unsplash.com/photo-1554284126-20af2cfd6e8b?auto=format&fit=crop&w=800&q=80" },
  { name: "Java Chip Frappuccino", price: 5.2, imgUrl: "https://images.unsplash.com/photo-1572394174553-3a866b08ed17?auto=format&fit=crop&w=800&q=80" },
  { name: "Strawberries & Cream", price: 5.0, imgUrl: "https://images.unsplash.com/photo-1588854337111-2a1e0a71500d?auto=format&fit=crop&w=800&q=80" },
  { name: "Iced Matcha Latte", price: 4.8, imgUrl: "https://images.unsplash.com/photo-1580643557605-0e4b7f6d1be5?auto=format&fit=crop&w=800&q=80" },
  { name: "Chai Tea Latte", price: 4.3, imgUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80" },
  { name: "Iced Green Tea", price: 3.9, imgUrl: "https://images.unsplash.com/photo-1541920559-70755fc45335?auto=format&fit=crop&w=800&q=80" },
  { name: "Mango Dragonfruit Refresher", price: 4.6, imgUrl: "https://images.unsplash.com/photo-1598511728754-0c3f1d5e7895?auto=format&fit=crop&w=800&q=80" },
  { name: "Strawberry Açaí Refresher", price: 4.6, imgUrl: "https://images.unsplash.com/photo-1567939582820-4a6e81f0850d?auto=format&fit=crop&w=800&q=80" },
  { name: "Signature Hot Chocolate", price: 3.7, imgUrl: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=80" },
  { name: "White Hot Chocolate", price: 3.9, imgUrl: "https://images.unsplash.com/photo-1541920559-70755fc45335?auto=format&fit=crop&w=800&q=80" },
  { name: "Mocha Latte", price: 4.4, imgUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
  { name: "Veranda Blend Pour-Over", price: 3.6, imgUrl: "https://images.unsplash.com/photo-1444526717692-7ec85f5cc529?auto=format&fit=crop&w=800&q=80" },
  { name: "Nitro Cold Brew", price: 4.8, imgUrl: "https://images.unsplash.com/photo-1598511728754-0c3f1d5e7895?auto=format&fit=crop&w=800&q=80" },
];

function Menu() {
  const { addItem, removeItem } = useContext(CartContext);
  const [quantities, setQuantities] = useState(
    drinksData.reduce((acc, drink) => ({ ...acc, [drink.name]: 0 }), {})
  );

  const increase = (drink) => {
    setQuantities({ ...quantities, [drink.name]: quantities[drink.name] + 1 });
    addItem(drink);
  };

  const decrease = (drink) => {
    if (quantities[drink.name] === 0) return; // Cannot go below 0
    setQuantities({ ...quantities, [drink.name]: quantities[drink.name] - 1 });
    removeItem(drink.name);
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
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-secondary me-2" onClick={() => decrease(drink)}>-</button>
                  <span className="mx-2">{quantities[drink.name]}</span>
                  <button className="btn btn-secondary ms-2" onClick={() => increase(drink)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
