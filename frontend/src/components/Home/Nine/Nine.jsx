import React from 'react'
import { images } from '../../../assets/img/images'
import "./Nine.css"
const Nine = () => {
  return (
    <div className=' customCard ' style={{ height: "100%" }}>
      <div className="card mb-3 customCard m-5" style={{ height: "100%" }} >
              <div className="row g-0 justify-content-center "  >
              <div className="col-md-5 d-flex align-items-center">
                  <div className="card-body">
                    <h5 className="card-title m-5 ">Celebrate
                      Parties with Fried Chicken
                    </h5>
                    <p className="card-text m-5">
                      This is a wider card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>

                    <button type="button" className=" mx-5 btn btn-warning  w-50  ">Proceed to Pay</button>
                  </div>
                </div>
                <div className="col-md-7">
                  <img
                    src={images.friedchicken}
                    className="img-fluid w-100"
                    alt="..."
                  />
                </div>

              </div>
            </div>
    </div>
  )
}

export default Nine
