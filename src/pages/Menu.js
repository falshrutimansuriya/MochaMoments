import React from "react";
import DrinkCard from "../components/DrinkCard";

const espressoDrinks = [
  { name: "Caffè Americano", imgUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" },
  { name: "Caffè Latte", imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { name: "Caffè Mocha", imgUrl: "https://images.unsplash.com/photo-1510626176961-4b37d6afc6b6?auto=format&fit=crop&w=800&q=80" },
  { name: "Caramel Macchiato", imgUrl: "https://images.unsplash.com/photo-1572448862528-51f7ebc9b1c5?auto=format&fit=crop&w=800&q=80" },
  { name: "Flat White", imgUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80" },
];

const brewedCoffee = [
  { name: "Freshly Brewed Coffee", imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { name: "Cold Brew", imgUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80" },
  { name: "Nitro Cold Brew", imgUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
  { name: "Pour-Over", imgUrl: "https://images.unsplash.com/photo-1523978591478-c753949ff840?auto=format&fit=crop&w=800&q=80" },
  { name: "Veranda Blend", imgUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
];

const frappuccinos = [
  { name: "Coffee Frappuccino", imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { name: "Mocha Frappuccino", imgUrl: "https://images.unsplash.com/photo-1532635241-17e820acc59d?auto=format&fit=crop&w=800&q=80" },
  { name: "Caramel Ribbon Crunch", imgUrl: "https://images.unsplash.com/photo-1590080875832-5ef1e8a5d59b?auto=format&fit=crop&w=800&q=80" },
  { name: "Java Chip Frappuccino", imgUrl: "https://images.unsplash.com/photo-1532635241-17e820acc59d?auto=format&fit=crop&w=800&q=80" },
  { name: "Strawberries & Cream", imgUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80" },
];

const refreshersTeas = [
  { name: "Iced Matcha Latte", imgUrl: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80" },
  { name: "Chai Tea Latte", imgUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80" },
  { name: "Iced Green Tea", imgUrl: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80" },
  { name: "Mango Dragonfruit Refresher", imgUrl: "https://images.unsplash.com/photo-1590080875832-5ef1e8a5d59b?auto=format&fit=crop&w=800&q=80" },
  { name: "Strawberry Açaí Refresher", imgUrl: "https://images.unsplash.com/photo-1587035881248-1e09d7b90c67?auto=format&fit=crop&w=800&q=80" },
];

const hotChocolates = [
  { name: "Signature Hot Chocolate", imgUrl: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80" },
  { name: "White Hot Chocolate", imgUrl: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80" },
  { name: "Mocha Latte", imgUrl: "https://images.unsplash.com/photo-1510626176961-4b37d6afc6b6?auto=format&fit=crop&w=800&q=80" },
];

function Menu() {
  const categories = [
    { title: "Espresso Drinks", data: espressoDrinks },
    { title: "Brewed Coffee", data: brewedCoffee },
    { title: "Frappuccino® Blended Beverages", data: frappuccinos },
    { title: "Refreshers & Teas", data: refreshersTeas },
    { title: "Hot Chocolates & Other Drinks", data: hotChocolates },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Menu</h1>
      {categories.map((cat, i) => (
        <div key={i} className="mb-5">
          <h2 className="text-brown mb-4">{cat.title}</h2>
          <div className="row gy-4">
            {cat.data.map((drink, j) => (
              <div className="col-12 col-md-6 col-lg-4" key={j}>
                <DrinkCard name={drink.name} imgUrl={drink.imgUrl} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
