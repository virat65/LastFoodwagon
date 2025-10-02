import axios from "axios";
import { useState } from "react";
import API from "../../Product/backendrouting";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
const Singup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    userType: "",
    secreatekey: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(files);
    if (name === "image") {
      setData({ ...data, [name]: files[0] });
    } else {
      console.log(e.target.value)
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hi")
    if (
      data?.userType === "Admin" &&
      data.secreatekey != import.meta.env.VITE_adminkey
    ) {
      toast.error("Invalid Amin");
    } else {
      try {
        const dataaaa = new FormData();
        dataaaa.append("userType", data.userType);
        if (data.userType === "Admin") {
          dataaaa.append("secreatekey", dataaaa.secreatekey);
        }
        const inputfield = data.email.trim();
        const isPhone = /^[0-9]{10}/.test(inputfield);
        if (isPhone) {
          dataaaa.append("phone", inputfield);
        } else {
          dataaaa.append("email", data.email);
        }
        dataaaa.append("name", data.name);

        dataaaa.append("password", data.password);
        dataaaa.append("image", data.image);
        const formData = await axios.post(API.signup.url, dataaaa);
        console.log(formData, "formData");
        if (formData.data.status == 200) {
          console.log("sucess in signup")
          toast.success(formData.data.message);
          navigate("/verifyemail");

        } else {
          toast.error(formData.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          <div className="card signupcard p-4 shadow d-flex flex-column">
            <h2 className="text-center mb-1">Signup</h2>
            <form onSubmit={handleSubmit} className="signupform mt-1">
              <div className="mb-3">
                <label className="form-label d-block">Your Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  placeholder="Enter your Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label d-block  ">Email address</label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="email"
                  value={data.email}
                  placeholder="Enter your email"
                />
              </div>

              {data?.userType === "Admin" && (
                <div className="mb-3">
                  <label className="form-label d-block">Secret key</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="secreatekey"
                    placeholder="Enter your secret key"
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label me-2 ">ID Type</label>
                <div>
                  <input
                    onChange={handleChange}
                    type="radio"
                    name="userType"
                    value="user"
                    className="radioOption me-1"
                  />
                  <label className="me-3">User</label>

                  <input
                    onChange={handleChange}
                    type="radio"
                    name="userType"
                    value="Admin"
                   className="radioOption me-1"
                  />
                  <label>Admin</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Photo</label>
                <input
                  onChange={handleChange}
                  type="file"
                  className="form-control"
                  name="image"
                />
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  name="password"
                  value={data.password}
                  placeholder="Enter your password"
                />
              </div>

              <button type="submit" className="btn btn-primary btnclass w-100">
                Sign Up
              </button>
            </form>

            <p className="text-center mt-3">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
