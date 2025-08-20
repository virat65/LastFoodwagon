import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../login/backendrouting";
import "./UserDelete.css";

const UserDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API.deleteuser.url}/${id}`);
      if (response.data.status === 200) {
        toast.success(response.data.message);
        navigate("/usertable"); // Redirect to user list or home
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log("Error deleting user:", error);
      toast.error("Server error. Try again later.");
    }
  };

  const handleCancel = () => {
    navigate("/usertable"); // Go back or wherever needed
  };

  return (
    <div className="user-delete-container user d-flex justify-content-center align-items-center ">
      <div className="user-delete-box">
        <h2>Are you sure you want to delete this user?</h2>
        <div className="button-group gap-2 d-flex justify-content-center flex-column  align-items-center">
          <button className="btn btn-danger w-50" onClick={handleDelete}>Yes, Delete</button>
          <button className="btn btn-secondary w-50" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserDelete;
