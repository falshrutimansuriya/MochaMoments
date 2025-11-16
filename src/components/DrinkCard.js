import React from "react";

function DrinkCard({ name, imgUrl }) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={imgUrl}
        className="card-img-top"
        alt={name}
        style={{ objectFit: "cover", height: "220px" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
      </div>
    </div>
  );
}

export default DrinkCard;
