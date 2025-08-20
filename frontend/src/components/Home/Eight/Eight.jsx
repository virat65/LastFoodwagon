import React from "react";
import { images } from "../../../assets/img/images";

const Eight = () => {
  return (
    <div>
      <div className="card mb-3 h-100 m-5" >
        <div className="row g-0">
          <div className="col-md-7">
            <img
              src={images.friedchicken}
              className=" rounded-start img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="col-md-5">
            <div className="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eight;
