import React from "react";

function Footer() {
  return (
    <footer className="text-center py-4 mt-5 border-top">
      <p>© {new Date().getFullYear()} MochaMoments Coffee Co.</p>
      <p>Follow us on ☕ Instagram | Facebook | Twitter</p>
    </footer>
  );
}

export default Footer;
