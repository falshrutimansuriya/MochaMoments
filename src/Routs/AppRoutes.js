import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";               // fixed path
import FindStore from "../pages/FindStore";
import CorporateOrders from "../pages/CorporateOrders";
import Rewards from "../pages/Rewards";
import About from "../pages/About";
import Contact from "../pages/Contact";         // imported Contact
import Cart from "../pages/Cart";               // imported Cart

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/findstore" element={<FindStore />} />
      <Route path="/corporateOrders" element={<CorporateOrders />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
