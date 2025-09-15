import React from "react";
import { images } from "../../../assets/img/images";
import "./Fourth.css";
const Fourth = () => {
  return (
<>
<div className="fourth">


<h2 className="fs-2 fw-bold">Popular Items</h2>
    <div className="items">

      <div className="col-sm-6 col-md-4 col-xl mb-2 h-100">
        <div className="card card-span h-100 rounded-3">
          <img src={images.cheeseBurger} alt="" />
          <div className="card-body ps-2">
            <h5 className="fw-bold text-1000 text-truncate mb-1">
              Cheese Burger
            </h5>
            <div>
              <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              <span className="text-primary">Burger Arena</span>
            </div>
            <span className="text-1000 fw-bold">$3.88</span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <a className="btn btn-lg btn-danger" href="#!" role="button">
            Order now
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div className="card card-span h-100 rounded-3">
          <img src={images.dancake} alt="" />
          <div className="card-body ps-2 ">
            <h5 className="fw-bold text-1000  mb-1 ">DankCake</h5>
            <div>
              <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              <span className="text-primary">Burger Arena</span>
            </div>
            <span className="text-1000 fw-bold">$3.88</span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <a className="btn btn-lg btn-danger" href="#!" role="button">
            Order now
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div className="card card-span h-100 rounded-3">
          <img src={images.toffesCake} alt="" />
          <div className="card-body ps-2">
            <h5 className="fw-bold text-1000 text-truncate mb-1">Toffe Cake</h5>
            <div>
              <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              <span className="text-primary">Burger Arena</span>
            </div>
            <span className="text-1000 fw-bold">$3.88</span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <a className="btn btn-lg btn-danger" href="#!" role="button">
            Order now
          </a>
        </div>
      </div>  <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div className="card card-span h-100 rounded-3">
          <img src={images.cheeseBurger} alt="" />
          <div className="card-body ps-2">
            <h5 className="fw-bold text-1000 text-truncate mb-1">
              Cheese Burger
            </h5>
            <div>
              <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              <span className="text-primary">Burger Arena</span>
            </div>
            <span className="text-1000 fw-bold">$3.88</span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <a className="btn btn-lg btn-danger" href="#!" role="button">
            Order now
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div className="card card-span h-100 rounded-3">
          <img src={images.dancake} alt="" />
          <div className="card-body ps-2">
            <h5 className="fw-bold text-1000 text-truncate mb-1">DankCake</h5>
            <div>
              <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              <span className="text-primary">Burger Arena</span>
            </div>
            <span className="text-1000 fw-bold">$3.88</span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <a className="btn btn-lg btn-danger" href="#!" role="button">
            Order now
          </a>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
        <div className="card card-span h-100 rounded-3">
          <img src={images.toffesCake} alt="" />
          <div className="card-body ps-2">
            <h5 className="fw-bold text-1000 text-truncate mb-1">Toffe Cake</h5>
            <div>
              <span className="text-warning me-2">
                <i className="fas fa-map-marker-alt"></i>{" "}
              </span>
              <span className="text-primary">Burger Arena</span>
            </div>
            <span className="text-1000 fw-bold">$3.88</span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <a className="btn btn-lg btn-danger" href="#!" role="button">
            Order now
          </a>
        </div>
      </div>
    </div></div>
</>
  );
};

export default Fourth;
