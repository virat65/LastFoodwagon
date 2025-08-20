import React from "react";
import "./Eleven.css";
const Eleven = () => {
  return (
    <div eleven>
      <div className=" upperPart ">
        <div className="head">
          <h4>Our Top Cities</h4>
          <h4>Contact</h4>
          <h4 className="margin">Legal</h4>
          <h4 className="margin">Company</h4>
          {/* <h4>Our Top Cities</h4> */}
        </div>
        <div className="list">
          <ul>
            <li>Mohali</li>
            <li>zirakpur</li>
            <li>Ludhiana</li>
            <li>Chandigarh</li>
            <li>Jalandhar</li>
          </ul>

          <ul>
            <li>Help </li>
            <li>Partnership </li>
            <li>Ride us</li>
            <li>24*7_Avilable</li>
            <li>Call us</li>
          </ul>
          <ul>
            <li>Refund </li>
            <li>Cancellation</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Five</li>
          </ul>

          <ul>
            <li>Refund </li>
            <li>Cancellation</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Five</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Eleven;
