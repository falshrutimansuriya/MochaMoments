import React, { useState } from "react";
import "./Pages.css";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    alert("Payment successful! 🎉");
  };

  return (
    <div className="page-container">
      <h2 className="page-title text-center mt-5">💳 Payment</h2>
      <div className="card mx-auto p-4 shadow" style={{ maxWidth: "400px", borderRadius: "12px" }}>
        <label className="form-label">Card Number</label>
        <input type="text" className="form-control mb-3" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

        <label className="form-label">Name on Card</label>
        <input type="text" className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} />

        <label className="form-label">Expiry</label>
        <input type="text" className="form-control mb-3" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

        <label className="form-label">CVV</label>
        <input type="password" className="form-control mb-3" value={cvv} onChange={(e) => setCvv(e.target.value)} />

        <button className="btn btn-primary w-100" onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;
