import React from "react";
import "./Pages.css";

const FindStore = () => {
  return (
    <div className="page-container">
      <h2 className="page-title text-center mt-5">📍 Our Stores in Dubai</h2>
      <p className="page-text text-center mx-auto" style={{ maxWidth: "700px" }}>
        Visit us at our flagship location in Dubai Silicon Oasis!
      </p>

      <div className="map-container mt-4" style={{ maxWidth: "800px", margin: "0 auto", borderRadius: "12px", overflow: "hidden" }}>
        <iframe
          title="Dubai Silicon Oasis Store"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4560020585067!2d55.374658315001244!3d25.182692383923906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c72b1f9a123%3A0x123456789abcdef!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <p className="text-center mt-3">
        Address: Dubai Silicon Oasis, Dubai, UAE
      </p>
    </div>
  );
};

export default FindStore;
