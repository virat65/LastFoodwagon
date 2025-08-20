import React from "react";
import "./Thirteen.css";
const Thirteen = () => {
  return (
    <div className="d-flex  thirteen">
      <h4>Follow us</h4>
      <div className="icons d-flex ">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <p className="b">
        Receive Exclusive offers and discounts into your mailBox
      </p>
      <div className="lower">
        <p
          className="card-text card-form "
          style={{ position: "relative", width: "300px" }}
        >
          <i
            className="fa-solid fa-envelope"
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              // color: "gray",
            }}
          ></i>
          <input
            type="text"
            placeholder="Enter Email"
            name=""
            style={{
              width: "250px",
              height: "40px",
              paddingLeft: "25px",
            }}
          />
          <a href="#">
            <button
              className="buton ms-1"
              style={{
                height: "40px",
                width: "100px",
                backgroundColor: "rgb(242,114,41)",
              }}
            >
              subscribe
            </button>
          </a>
        </p>
      </div>
      <hr className="m-4" />
      <div className="foot d-flex m-4">
        <div className="textt">
          <p>All right reseverd My Company,2025</p>
        </div>
        <div className="madeby">
          <p>Made by Me</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Thirteen;
