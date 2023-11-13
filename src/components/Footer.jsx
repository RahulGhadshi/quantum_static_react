import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer--text">About</div>
      <span className="footer-separator"> | </span>
      <div className="footer--text">Contact Us</div>
    </footer>
  );
}
