import React from "react";
import "./Pages.css";

function About() {
  return (
    <div className="page about-page">
      <section className="hero">
        <h1>About MochaMoments</h1>
        <p>
          Where every cup tells a story — crafted with passion, warmth, and a love for coffee.
        </p>
      </section>

      <section className="about-content">
        <div>
          <h2>Our Story</h2>
          <p>
            Founded in 2024, MochaMoments began as a small neighborhood coffee spot.
            Today, we serve coffee lovers around the world with ethically sourced beans
            and handcrafted brews made to perfection.
          </p>
        </div>

        <div>
          <h2>Our Mission</h2>
          <p>
            We’re here to make your moments richer — whether it’s your first sip in the
            morning or your last latte before sunset.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;

