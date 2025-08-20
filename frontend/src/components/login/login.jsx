import React, { useState } from "react";
import API from "./backendrouting.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cookie from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  console.log(data);
  const handleChange = (e) => {
    console.log(e);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = await axios.post(API.login.url, data);
      console.log(formdata, "DAta");
      if (formdata.data.status === 200) {
        toast.success(formdata.data.message);
        console.log("first",formdata.data.message)
        console.log(" logini sucess")
        // localStorage.setItem("userToken", JSON.stringify(formdata.data.body));
        // sessionStorage.setItem("userToken", JSON.stringify(formdata.data.body));
        cookie.set("userInfo", JSON.stringify(formdata.data.body));
        navigate("/");
        setTimeout(() => {

          window.location.reload();
        }, 1000);
      } else {
        toast.error(formdata.data.message);
      }
    } catch (error) {
      toast.error(error);
      console.log(error, "error in handleSubmit");
    }
  };
  return (
    <div className="login-container  container mt-5 d-flex justify-content-center align-items-center">
      <div className="login-card p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email or phoneNumber
            </label>
            <input
              type="text"
              className="form-control"
              value={data.email}
              name="email"
              placeholder=" email OR phoneNumber"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              value={data.password}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sing UP</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
