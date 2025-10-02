import React, { useState } from "react";
import API from "../Product/backendrouting.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cookie from "js-cookie";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(API.login.url, data);

      if (res.data.status === 200) {
        toast.success(res.data.message);
        cookie.set("userInfo", JSON.stringify(res.data.body));
        navigate("/");
        setTimeout(() => window.location.reload(), 1000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Error in handleSubmit:", error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100   mt-4">
      <div className="col-12 col-sm-10 col-md-6 col-lg-4">
        <div className="login-card p-4 shadow rounded">
          <h2 className="text-center mt-4">Login</h2>

          <form onSubmit={handleSubmit} className="login-form">
            {/* Email / Phone */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email or Phone Number
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="form-control d-block"
                placeholder="Enter email or phone number"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="form-control  d-block"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 login-button">
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don't have an account? <a href="/sign">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
