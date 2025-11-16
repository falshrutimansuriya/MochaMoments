import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="text-center py-5" style={{ backgroundColor: "#f7f3e9" }}>
      <div className="container">
        <h2>Join MochaMoments Rewards</h2>
        <p className="mt-3">Earn free drinks, early access, and exclusive offers.</p>
        <Link to="/rewards" className="btn btn-outline-dark mt-3">Join Now</Link>
      </div>
    </section>
  );
}

export default CTA;
