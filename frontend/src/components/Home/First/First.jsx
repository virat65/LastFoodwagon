import React from "react";
// import {maggie} from "../../../assets/img/maggie.png";
import "./First.css";
import { images } from "../../../assets/img/images";
import cookie from "js-cookie";
const First = () => {
  const geTokennn = cookie.get("userInfo");
  const token = geTokennn ? JSON.parse(geTokennn) : null;
  console.log(token);
  return (
<div className="container">




    <div className="home-first row row-cols-1 row-cols-lg-2 ">
      <div className="home-left  col ">
        <div className="text">
          <h1>Are your starving?</h1>
          <h3>Within a few clicks, find meals that are accessible near you</h3>
        </div>

        <div className="card card-design" style={{ width: "30rem" }}>
          <div className="card-body">
            <div className="upper">
              <a
                href="#"
                style={{ backgroundColor: "rgb(253,233,222)" }}
                className="btn  mx-4"
              >
                <i
                  className="fa-solid fa-motorcycle me-2 "
                  style={{ color: "rgb(242,114,41)" }}
                ></i>
                Delivery
              </a>
              <a href="#" className="btn ">
                {" "}
                <i className="fa-solid fa-bag-shopping me-2"></i>
                pickup
              </a>
            </div>
            <div className="lower">
              <p
                className="card-text card-form me-3"
                style={{ position: "relative", width: "300px" }}
              >
                <i
                  className=" fa-solid fa-location-dot"
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
                  placeholder="Enter Your Address"
                  name=""
                  id="text"
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
                    Find Food
                  </button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-right col d-flex justify-content-center align-items-center">
        {/* <img src={maggie} alt="" /> */}
        <img src={images.maggie} alt="" />

    </div></div></div>
  );
};

export default First;
