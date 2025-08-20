import React from "react";
import logo from "../../assets/logo.svg";
import cookie from "js-cookie";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Navbar = () => {

  const getcookies = cookie.get("userInfo");
  const availableCookie = getcookies ? JSON.parse(getcookies) : null;

  console.log(availableCookie, "cookiiiie");
  const handleLogout = () => {
    cookie.remove("userInfo");
    setTimeout(() => {
      window.location.reload();

    }, 1000);
    console.log("logout successfully");
    toast.success("user Logout successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid gap">

          <div className="nav-first">
            <a className="navbar-brand ms-3" href="#">
              <img src={logo} alt="" className="img-fluid"/>
              <span className=" ms-3 logotext">Foodwagon</span>
            </a>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="nav-second ">
            <div className="welcomeMessage d-none d-md-block  ">
              {availableCookie
                ? `Welcome ${availableCookie.name}`
                : `Welcome Guest`}
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <p>
                Deliver to :{" "}
                <span>
                  <i className="fa-solid fa-location-dot mx-1 colour"></i>
                </span>
                <span className="ms-2">Current Location </span>
                <span>Mirpur 1 Bus Stand, Dhaka</span>
              </p>
            </div>
          </div>

          <div className="nav-third me-5">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            {availableCookie ? (
              <button
                className="btn btn-outline-success colour"
                href="#"

                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link aria-current="page" to={"/login"}>
                <button
                  className="btn btn-outline-success colour w-100"
                  href=""
                  type=""
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
