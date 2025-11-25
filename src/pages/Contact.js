import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields before sending!");
      return;
    }
    alert(`Thank you, ${name}! Your message has been sent successfully. ☕`);
    setName("");
    setEmail("");
    setMessage("");
  };

  const goToStores = () => {
    navigate("/stores");
  };

  return (
    <div className="page-container">
      <h2 className="page-title text-center mt-5">📬 Contact Us</h2>
      <p className="page-text text-center mx-auto" style={{ maxWidth: "700px" }}>
        We'd love to hear from you! Reach out with questions, feedback, or anything coffee-related.
      </p>

      <div className="card mx-auto p-4 shadow" style={{ maxWidth: "500px", borderRadius: "12px" }}>
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            if (email && !email.includes("@gmail.com")) {
              alert("Please enter a valid email address with '@gmail.com'");
            }
          }}
          placeholder="Enter email"
        />


        <label className="form-label">Message</label>
        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className="btn btn-primary w-100" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
