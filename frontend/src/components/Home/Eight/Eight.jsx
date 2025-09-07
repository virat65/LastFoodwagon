import React from "react";
import { images } from "../../../assets/img/images";
import "./Eight.css"
const Eight = () => {
  return (
    <div>
      <div className="card mb-3 h-100 m-5" >
        <div className="row g-0">
          <div className="col-md-7">
            <img
              src={images.friedchicken}
              className=" h-100 img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="col-md-5  ">
            <div className="card-body d-flex justify-content-center  flex-column align-items-center text-align-center h-100">
              <h5 className="card-title ">Celebrate
                Parties with Fried Chicken
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <button type="button" className=" mx-5 btn btn-warning  w-50  ">Proceed to Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eight;
