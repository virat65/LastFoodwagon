import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import cookie from "js-cookie";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getcookies = cookie.get("userInfo");
  const availableCookie = getcookies ? JSON.parse(getcookies) : null;

  const handleLogout = () => {
    cookie.remove("userInfo");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    toast.success("User logged out successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid gap">
          {/* Logo */}
          <div className="nav-first">
            <a
              className="navbar-brand ms-3"
              href="#"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="" className="img-fluid" />
              <span className="ms-3 logotext">Foodwagon</span>
            </a>
          </div>

          {/* Welcome + Deliver */}
          <div className="nav-second d-flex align-items-center justify-content-between w-50">
            <div className="welcomeMessage">
              {availableCookie
                ? `Welcome ${availableCookie.name}`
                : `Welcome Guest`}
            </div>
            <div className="deliver">
              <p className="mb-0">
                Deliver to:{" "}
                <i className="fa-solid fa-location-dot mx-1 colour"></i>
                <span className="ms-1">Current Location</span>{" "}
                <span>Mirpur 1 Bus Stand, Dhaka</span>
              </p>
            </div>
          </div>

          {/* Search + Login/Profile */}
          <div className="nav-third me-lg-5 d-flex justify-content-between">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {availableCookie ? (
                <button
                  className="btn btn-outline-success colour"
                  type="button"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  Profile
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn btn-outline-success colour">
                    Login
                  </button>
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar position-fixed z-1 bg-white end-0 mt-5 p-5 top-5 border rounded">
          <div className="sidebar-content">
            <h4>Profile</h4>
            <p>
              <strong>Name:</strong> {availableCookie?.name}
            </p>
            <p>
              <strong>Email:</strong> {availableCookie?.email}
            </p>

            {availableCookie?.userType.includes("Admin") && (
              <>
                <button
                  className="btn btn-primary d-block my-2"
                  onClick={() => {
                    navigate("/usertable");
                    setSidebarOpen(false);
                  }}
                >
                  All Users Details
                </button>
                <button
                  className="btn btn-info d-block my-2"
                  onClick={() => {
                    navigate("/allProducts");
                    setSidebarOpen(false);
                  }}
                >
                  All Products Details
                </button>
                <button
                  className="btn btn-success d-block my-2"
                  onClick={() => {
                    navigate("/addproduct");
                    setSidebarOpen(false);
                  }}
                >
                  Add Product
                </button>
              </>
            )}

            <button
              className="btn btn-warning d-block my-2"
              onClick={() => {
                navigate("/productPage");
                setSidebarOpen(false);
              }}
            >
              Product Page
            </button>

            <Link to={"/cart"} className="no-underline">
              <button className="btn btn-secondary d-block my-2">Cart Page</button>
            </Link>

            <button
              className="btn btn-danger d-block my-2"
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
            >
              Logout
            </button>

            <button
              className="btn btn-secondary d-block my-2"
              onClick={() => setSidebarOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
