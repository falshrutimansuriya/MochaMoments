import React from "react";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Rewards = () => {
  const handleJoinRewards = () => {
    alert(
      "🎉 Congratulations! You have successfully joined the MochaMoments Rewards Program! Enjoy your free perks and stars on every purchase ☕"
    );
  };

  return (
    <div className="page-container">
      <h2 className="page-title text-center mt-5">🎁 MochaMoments Rewards</h2>
      <br />

      <p
        className="page-text text-center mx-auto"
        style={{ maxWidth: "700px" }}
      >
        Welcome to <strong>MochaMoments Rewards</strong> — our way of saying
        thanks for being a loyal coffee lover! Earn stars with every purchase
        and enjoy free drinks, snacks, and exclusive member perks.
      </p>

      {/* Join Rewards Button */}
      <div className="text-center mt-4">
        <button
          className="btn btn-primary px-4 py-2"
          onClick={handleJoinRewards}
        >
          Join Rewards Program
        </button>
      </div>

      {/* Rewards Tiers */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {/* Tier 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm reward-card h-100">
              <div className="card-body">
                <h5 className="card-title text-brown">⭐ Bronze Member</h5>
                <p className="card-text">
                  Earn 1 Star for every $1 spent. Redeem free add-ons and
                  special offers on select drinks.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm reward-card h-100">
              <div className="card-body">
                <h5 className="card-title text-brown">🌟 Silver Member</h5>
                <p className="card-text">
                  Earn 1.5 Stars per $1 spent. Enjoy free size upgrades and
                  priority access to new seasonal drinks.
                </p>
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm reward-card h-100">
              <div className="card-body">
                <h5 className="card-title text-brown">💎 Gold Member</h5>
                <p className="card-text">
                  Earn 2 Stars per $1 spent. Get free handcrafted drinks,
                  birthday rewards, and exclusive MochaMoments events!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;



