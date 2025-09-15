import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Table/Grid */}
        <div className="footer-grid">
          <div>
            <h4>Our Top Cities</h4>
            <ul>
              <li>Mohali</li>
              <li>Zirakpur</li>
              <li>Ludhiana</li>
              <li>Chandigarh</li>
              <li>Jalandhar</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Help</li>
              <li>Partnership</li>
              <li>Ride with Us</li>
              <li>24×7 Available</li>
              <li>Call Us</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Refund</li>
              <li>Cancellation</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Investors</li>
              <li>Press</li>
            </ul>
          </div>
        </div>

       

        {/* Social + Copyright */}

      </div>
    </footer>
  );
};

export default Footer;
