import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Pages.css";

const Cart = () => {
  const { cartItems, addItem, removeItem, getTotal } = useContext(CartContext);

  const [step, setStep] = useState("cart");

  // Payment inputs
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "mocha10") {
      setDiscount(0.10);
      alert("🎉 Coupon Applied: 10% OFF!");
    } else {
      alert("❌ Invalid Coupon");
    }
  };

  const subtotal = getTotal();
  const discountAmount = subtotal * discount;
  const subtotalAfterDiscount = subtotal - discountAmount;
  const taxRate = 0.05;
  const tax = subtotalAfterDiscount * taxRate;
  const grandTotal = subtotalAfterDiscount + tax;

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successType, setSuccessType] = useState(""); // "paid" or "cod"

  const handlePayment = () => {
    if (!paymentMethod) return;

    if (paymentMethod === "cod") {
      setSuccessMessage("✅ Your order has been placed! Pay at delivery.");
      setSuccessType("cod");
      setStep("success");
      return;
    }

    // CARD VALIDATION
    if (paymentMethod === "card") {
      const cardNumberValid = /^\d{16}$/.test(cardNumber.replace(/\s+/g, ""));
      const nameValid = /^[a-zA-Z ]{2,}$/.test(name);
      const expiryValid = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
      const cvvValid = /^\d{3,4}$/.test(cvv);

      if (!cardNumberValid) return alert("❌ Invalid card number! Must be 16 digits.");
      if (!nameValid) return alert("❌ Invalid name on card!");
      if (!expiryValid) return alert("❌ Invalid expiry! Format MM/YY.");
      if (!cvvValid) return alert("❌ Invalid CVV! Must be 3 or 4 digits.");
    }

    // UPI VALIDATION
    if (paymentMethod === "upi") {
      const upiInput = document.querySelector('input[placeholder="example@upi"]')?.value;
      const upiValid = /^[\w.-]+@[\w]+$/.test(upiInput || "");
      if (!upiValid) return alert("❌ Invalid UPI ID!");
    }

    // Simulate payment process
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("🎉 Payment Successful! Thank you for shopping at MochaMoments!");
      setSuccessType("paid");
      setStep("success");
    }, 2000);
  };

  return (
    <div className="container py-5">

      {/* CART */}
      {step === "cart" && (
        <>
          <h1 className="text-center mb-4">🛒 Your Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, i) => (
                <div key={i} className="card mb-3 p-3 shadow" style={{ borderRadius: "15px" }}>
                  <div className="mocha-card-left">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="mocha-card-content">
                      <h5>{item.name}</h5>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <p className="fw-bold">
                        Item Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center mt-3">
                    <button className="mocha-qty-btn me-2" onClick={() => removeItem(item.name)}>-</button>
                    <span className="mocha-qty-number">{item.quantity}</span>
                    <button className="mocha-qty-btn ms-2" onClick={() => addItem(item)}>+</button>
                  </div>
                </div>
              ))}

              <div className="mt-4 text-end">
                <input
                  type="text"
                  placeholder="Enter coupon"
                  className="form-control d-inline-block"
                  style={{ width: "200px" }}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button className="btn btn-dark ms-2" onClick={applyCoupon}>Apply</button>
              </div>

              <div className="text-end mt-4">
                <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                {discount > 0 && <h5 className="text-success">Discount: -${discountAmount.toFixed(2)}</h5>}
                <h5>Tax (5%): ${tax.toFixed(2)}</h5>
                <h3 className="fw-bold">Grand Total: ${grandTotal.toFixed(2)}</h3>
              </div>

              <div className="text-end mt-4">
                <button className="btn btn-primary btn-lg px-5 py-2 shadow" onClick={() => setStep("payment")}>
                  Proceed to Payment →
                </button>
              </div>
            </>
          )}
        </>
      )}

      {/* PAYMENT */}
      {step === "payment" && (
        <div className="page-container">
          <h2 className="text-center mb-4">💳 Select Payment Method</h2>
          <div className="mocha-payment-box mx-auto" style={{ maxWidth: "450px" }}>
            <label className="fw-bold">Choose Method:</label>
            <select className="form-control mb-3" onChange={(e) => setPaymentMethod(e.target.value)}>
              <option>Select</option>
              <option value="card">Credit / Debit Card</option>
              <option value="upi">UPI</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {paymentMethod === "card" && (
              <>
                <label className="form-label">Card Number</label>
                <input type="text" className="form-control mb-3" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

                <label className="form-label">Name on Card</label>
                <input type="text" className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} />

                <label className="form-label">Expiry (MM/YY)</label>
                <input type="text" className="form-control mb-3" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

                <label className="form-label">CVV</label>
                <input type="password" className="form-control mb-3" value={cvv} onChange={(e) => setCvv(e.target.value)} />
              </>
            )}

            {paymentMethod === "upi" && (
              <>
                <label className="form-label">Enter UPI ID</label>
                <input type="text" className="form-control mb-3" placeholder="example@upi" />
              </>
            )}

            {paymentMethod === "cod" && (
              <p className="text-warning fw-bold">You will pay at delivery.</p>
            )}

            <button className="mocha-payment-btn w-100 mt-3" onClick={handlePayment}>
              {loading ? "Processing..." : "Confirm Order"}
            </button>
            <button className="btn btn-secondary w-100 mt-2" onClick={() => setStep("cart")}>← Back to Cart</button>
          </div>
        </div>
      )}

      {/* SUCCESS / CONFIRMATION */}
      {step === "success" && (
        <div
          className="mocha-success text-center mx-auto p-4"
          style={{
            maxWidth: "500px",
            borderRadius: "15px",
            border: "2px solid",
            borderColor: successType === "paid" ? "#28a745" : "#ffc107",
            backgroundColor: successType === "paid" ? "#d4edda" : "#fff3cd",
            color: successType === "paid" ? "#155724" : "#856404"
          }}
        >
          <h1>{successMessage}</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
