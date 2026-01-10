import React, { useState } from "react";
import API from "../Product/backendrouting.js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";




const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
const navigate = useNavigate()
  const handleChange = (e) => {
    setOtp(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("first")
      const res = await axios.post(API.verifyemail.url, { otpCode: otp });
      console.log(res,"Res")


      // Show toast from backend message (success or fail)
      if (res.data.success) {
        toast.success(res.data.message);
 navigate("/login")
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error in verify email:", error);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 mt-4">
      <div className="col-12 col-sm-10 col-md-6 col-lg-4">
        <div className="login-card p-4 shadow rounded">
          <h2 className="text-center mt-4">Verify Email</h2>

          <form onSubmit={handleSubmit} className="login-form">
            {/* OTP Input */}
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">
                Enter OTP
              </label>
              <input
                type="text"
                name="otp"
                value={otp}
                onChange={handleChange}
                className="form-control d-block"
                placeholder="Enter the OTP sent to your email"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 login-button"
            >
              Verify
            </button>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
