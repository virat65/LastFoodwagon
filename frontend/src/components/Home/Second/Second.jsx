import React from "react";
import { images } from "../../../assets/img/images";
import "./Second.css";
const Second = () => {
  return (
    <>
      <div className="cards d-flex gap-2">
        <div className="first ">
          <div className="img-part card-designs">
            <div className="percent-off">
              <span>
                <h1>15</h1>
              </span>
              <div className="off">
                <span>%</span>
                <span>off</span>
              </div>
            </div>
          </div>

          <div className="text-part">
            <h5>flat hill slingback</h5>
            <span>
              <p>6 days remaining</p>
            </span>{" "}
          </div>
        </div>
        <div className="second">
        <div className="img-part card-designs">
            <div className="percent-off">
              <span>
                <h1>15</h1>
              </span>
              <div className="off">
                <span>%</span>
                <span>off</span>
              </div>
            </div>
          </div>

          <div className="text-part">
            <h5>flat hill slingback</h5>
            <span>
              <p>6 days remaining</p>
            </span>{" "}
          </div>
        </div>
        <div className="third ">
        <div className="img-part card-designs">
            <div className="percent-off">
              <span>
                <h1>15</h1>
              </span>
              <div className="off">
                <span>%</span>
                <span>off</span>
              </div>
            </div>
          </div>
          <div className="text-part">
            <h5>flat hill slingback</h5>
            <span>
              <p>6 days remaining</p>
            </span>{" "}
          </div>
        </div>
        <div className="fourth ">
        <div className="img-part card-designs">
            <div className="percent-off">
              <span>
                <h1>15</h1>
              </span>
              <div className="off">
                <span>%</span> <br />
                <span>off</span>
              </div>
            </div>
          </div>

          <div className="text-part">
            <h5>flat hill slingback</h5>
            <span>
              <p>6 days remaining</p>
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
