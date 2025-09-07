import React from "react";
import { images } from "../../../assets/img/images";
import "./Five.css";
const Five = () => {
  return (
    <>
      <div className="container ">
        <div className="row gaps">
          <div className="col center my-5 ">
            <h2>Featured Restaurants</h2>
          </div>
          <div className="cardForming d-flex justify-content-center ">
           <div className="col d-flex justify-content-center  flex-column align-items-center">
              <div
                className="cardd"
                style={{ width: "18rem", position: "relative" }}
              >
                <div className="tags" style={{ position: "absolute" }}>
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(242,114,41)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    <svg
                      className="svg-inline--fa fa-tag fa-w-16 me-2 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      ></path>
                    </svg>

                    <span className="star">20%Off</span>
                  </span>{" "}
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(255,179,15)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    {" "}
                    <svg
                      className="svg-inline--fa fa-clock fa-w-16 me-1 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                      ></path>
                    </svg>
                    <span className="star">Fast</span>
                  </span>
                </div>
                <img
                  src={images.foodWorld}
                  className="card-img-top radius img-fluid"
                  alt="..."
                />
              </div>
              <div className="cardtext my-2">
                <img src={images.foodWorldlogo} alt="" />
                <div className="star mx-2 ">
                  <span>
                    <b>Food World</b>
                  </span>
                  <div className="detail ">
                    <svg
                      className="svg-inline--fa fa-star fa-w-18 svgSize "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <span>46</span>
                  </div>
                </div>
              </div>
              <p className="cardsss">Open Tomorrow</p>
            </div>
            <div className="col col d-flex justify-content-center  flex-column align-items-center">
              <div
                className="cardd"
                style={{ width: "18rem", position: "relative" }}
              >
                <div className="tags" style={{ position: "absolute" }}>
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(242,114,41)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    <svg
                      className="svg-inline--fa fa-tag fa-w-16 me-2 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      ></path>
                    </svg>

                    <span className="star">20%Off</span>
                  </span>{" "}
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(255,179,15)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    {" "}
                    <svg
                      className="svg-inline--fa fa-clock fa-w-16 me-1 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                      ></path>
                    </svg>
                    <span className="star">Fast</span>
                  </span>
                </div>
                <img
                  src={images.foodWorld}
                  className="card-img-top radius img-fluid"
                  alt="..."
                />
              </div>
              <div className="cardtext my-2">
                <img src={images.foodWorldlogo} alt="" className="" />
                <div className="star mx-2 ">
                  <span>
                    <b>Food World</b>
                  </span>
                  <div className="detail ">
                    <svg
                      className="svg-inline--fa fa-star fa-w-18 svgSize "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <span>46</span>
                  </div>
                </div>
              </div>
              <p className="cardsss">Open Tomorrow</p>
            </div>  <div className="col col d-flex justify-content-center  flex-column align-items-center">
              <div
                className="cardd"
                style={{ width: "18rem", position: "relative" }}
              >
                <div className="tags" style={{ position: "absolute" }}>
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(242,114,41)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    <svg
                      className="svg-inline--fa fa-tag fa-w-16 me-2 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      ></path>
                    </svg>

                    <span className="star">20%Off</span>
                  </span>{" "}
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(255,179,15)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    {" "}
                    <svg
                      className="svg-inline--fa fa-clock fa-w-16 me-1 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                      ></path>
                    </svg>
                    <span className="star">Fast</span>
                  </span>
                </div>
                <img
                  src={images.foodWorld}
                  className="card-img-top radius img-fluid"
                  alt="..."
                />
              </div>
              <div className="cardtext my-2">
                <img src={images.foodWorldlogo} alt="" />
                <div className="star mx-2 ">
                  <span>
                    <b>Food World</b>
                  </span>
                  <div className="detail ">
                    <svg
                      className="svg-inline--fa fa-star fa-w-18 svgSize "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <span>46</span>
                  </div>
                </div>
              </div>
              <p className="cardsss">Open Tomorrow</p>
            </div>
            <div className="col col d-flex justify-content-center  flex-column align-items-center">
              <div
                className="cardd"
                style={{ width: "18rem", position: "relative" }}
              >
                <div className="tags" style={{ position: "absolute" }}>
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(242,114,41)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    <svg
                      className="svg-inline--fa fa-tag fa-w-16 me-2 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      ></path>
                    </svg>

                    <span className="star">20%Off</span>
                  </span>{" "}
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(255,179,15)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    {" "}
                    <svg
                      className="svg-inline--fa fa-clock fa-w-16 me-1 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                      ></path>
                    </svg>
                    <span className="star">Fast</span>
                  </span>
                </div>
                <img
                  src={images.foodWorld}
                  className="card-img-top radius img-fluid"
                  alt="..."
                />
              </div>
              <div className="cardtext my-2">
                <img src={images.foodWorldlogo} alt="" className="" />
                <div className="star mx-2 ">
                  <span>
                    <b>Food World</b>
                  </span>
                  <div className="detail ">
                    <svg
                      className="svg-inline--fa fa-star fa-w-18 svgSize "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <span>46</span>
                  </div>
                </div>
              </div>
              <p className="cardsss">Open Tomorrow</p>
            </div>  <div className="col col d-flex justify-content-center  flex-column align-items-center">
              <div
                className="cardd"
                style={{ width: "18rem", position: "relative" }}
              >
                <div className="tags" style={{ position: "absolute" }}>
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(242,114,41)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    <svg
                      className="svg-inline--fa fa-tag fa-w-16 me-2 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      ></path>
                    </svg>

                    <span className="star">20%Off</span>
                  </span>{" "}
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(255,179,15)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    {" "}
                    <svg
                      className="svg-inline--fa fa-clock fa-w-16 me-1 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                      ></path>
                    </svg>
                    <span className="star">Fast</span>
                  </span>
                </div>
                <img
                  src={images.foodWorld}
                  className="card-img-top radius img-fluid"
                  alt="..."
                />
              </div>
              <div className="cardtext my-2">
                <img src={images.foodWorldlogo} alt="" />
                <div className="star mx-2 ">
                  <span>
                    <b>Food World</b>
                  </span>
                  <div className="detail ">
                    <svg
                      className="svg-inline--fa fa-star fa-w-18 svgSize "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <span>46</span>
                  </div>
                </div>
              </div>
              <p className="cardsss">Open Tomorrow</p>
            </div>
            <div className="col col d-flex justify-content-center  flex-column align-items-center ">
              <div
                className="cardd"
                style={{ width: "18rem", position: "relative" }}
              >
                <div className="tags" style={{ position: "absolute" }}>
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(242,114,41)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    <svg
                      className="svg-inline--fa fa-tag fa-w-16 me-2 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tag"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
                      ></path>
                    </svg>

                    <span className="star">20%Off</span>
                  </span>{" "}
                  <span
                    className="btn btnnn m-2"
                    style={{
                      backgroundColor: "rgb(255,179,15)",
                      width: "100px",
                      color: "white",
                      height: "30px",
                    }}
                  >
                    {" "}
                    <svg
                      className="svg-inline--fa fa-clock fa-w-16 me-1 fs-0"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="clock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
                      ></path>
                    </svg>
                    <span className="star">Fast</span>
                  </span>
                </div>
                <img
                  src={images.foodWorld}
                  className="card-img-top radius img-fluid"
                  alt="..."
                />
              </div>
              <div className="cardtext my-2">
                <img src={images.foodWorldlogo} alt="" className="" />
                <div className="star mx-2 ">
                  <span>
                    <b>Food World</b>
                  </span>
                  <div className="detail ">
                    <svg
                      className="svg-inline--fa fa-star fa-w-18 svgSize "
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                      ></path>
                    </svg>
                    <span>46</span>
                  </div>
                </div>
              </div>
              <p className="cardsss">Open Tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Five;
