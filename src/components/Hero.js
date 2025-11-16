import React from "react";

function Hero() {
  return (
    <section className="hero text-center py-5" style={{ backgroundColor: "#CBB994" }}>
      <div className="container">
        <h1 className="fw-bold display-4">Welcome to MochaMoments</h1>
        <p className="lead mt-3">Your daily cup of warmth, crafted with love.</p>
        <a href="/menu" className="btn btn-dark mt-4">Explore Menu</a>
      </div>
    </section>
  );
}

export default Hero;
