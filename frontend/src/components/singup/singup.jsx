import axios from "axios";
import React from "react";
import { useState } from "react";
import API from "../login/backendrouting";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(files);
    if (name === "image") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const dataaaa = new FormData();
      dataaaa.append("name", data.name);
      dataaaa.append("email", data.email);
      dataaaa.append("password", data.password);
      dataaaa.append("image", data.image);
      const formData = await axios.post(API.signup.url, dataaaa);
      console.log(formData, "formData");
      if (formData.data.status == 200) {
        toast.success(formData.data.message);
        navigate("/login");
      } else {
        toast.error(formData.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  return (
    <div>
      <div className="login-container container mt-5 d-flex justify-content-center align-items-center">
        <div className="login-card p-4 shadow">
          <h2 className="text-center mb-4">Singup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={data.name}
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={data.email}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Photo</label>
              <input
                onChange={handleChange}
                type="file"
                className="form-control"
                id="image"
                name="image"
                placeholder="insert Photo"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                value={data.password}
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              SignUp
            </button>
          </form>
          <p className="text-center mt-3">
            Already have account <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
