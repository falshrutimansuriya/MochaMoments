import React, { useState } from "react";
import "./Pages.css";

const CorporateOrders = () => {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = () => {
    alert(`Thank you, ${company}! Your request for ${quantity} cards has been received.`);
  };

  return (
    <div className="page-container">
      <h2 className="page-title text-center mt-5">🏢 Corporate Gift Orders</h2>
      <div className="card mx-auto p-4 shadow" style={{ maxWidth: "500px", borderRadius: "12px" }}>
        <label className="form-label">Company Name</label>
        <input type="text" className="form-control mb-3" value={company} onChange={(e) => setCompany(e.target.value)} />

        <label className="form-label">Email</label>
        <input type="email" className="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="form-label">Quantity of Gift Cards</label>
        <input type="number" className="form-control mb-3" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />

        <button className="btn btn-dark w-100" onClick={handleSubmit}>Submit Request</button>
      </div>
    </div>
  );
};

export default CorporateOrders;
