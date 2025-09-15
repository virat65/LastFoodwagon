import React from "react";
import "./Third.css";
import { images } from "../../../assets/img/images";
const Third = () => {
  return (
    <>
      <div className="container third">
        <div className="card    border-0">
        <h2 className="fw-bold fs-1">How does it work </h2>
          <div className="row show-cards ">
            <div className="col-12 col-lg-6 mb-6 card-design w-50 mb-2">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={images.location}
                  // height="12"
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Select location</h5>
                <p className="mb-md-0 text  ">
                  Choose the location where your food will be delivered.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-6 card-design w-50 mb-2">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={images.order}
                  // height="112"
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Choose order</h5>
                <p className="mb-md-0 text">
                  Check over hundreds of menus to pick your favorite food
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-6 card-design w-50 mt-2">
              <div className="text-center">
                <img
                  className="shadow-icon"
                  src={images.pay}
                  // height="112"
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Pay advanced</h5>
                <p className="mb-md-0 text">
                  It's quick, safe, and simple. Select several methods of
                  payment
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-6 card-design w-50 mt-2">
              <div className="text-center">
                <img
                  className="shadow-icon img-fluid"
                  src={images.meals}
                  // height="112"
                  alt="..."
                />
                <h5 className="mt-4 fw-bold">Enjoy meals</h5>
                <p className="mb-md-0 text">
                  Food is made and delivered directly to your home.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
