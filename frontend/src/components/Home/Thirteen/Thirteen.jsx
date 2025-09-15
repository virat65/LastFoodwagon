import React from "react";
import "./Thirteen.css";

const Thirteen = () => {
  return (
    <div className="thirteen">
      <h4>Follow us</h4>

      <div className="icons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>

      <p>Receive exclusive offers and discounts in your mailbox</p>

      <div className="lower" style={{ position: "relative" }}>
        <i
          className="fa-solid fa-envelope"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "gray",
          }}
        ></i>
        <input type="text" placeholder="Enter Email" />
        <button>Subscribe</button>
      </div>

      <hr className="m-4" />

      <div className="foot">
        <p>All rights reserved © My Company, 2025</p>
        <p>Made by Me</p>
      </div>
    </div>
  );
};

export default Thirteen;
