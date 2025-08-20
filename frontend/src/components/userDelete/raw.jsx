import axios from "axios";
import React, { useEffect } from "react";
import API from "../login/backendrouting";
import "./UserDelete.css";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UserDelete = () => {
  const { id } = useParams();
  const getInfo = async () => {
    try {

      const deleteuser = await axios.delete(`${API.deleteuser.url}/${id}`);
      console.log(deleteuser, "deleteee");
      if (deleteuser.data.status === 200) {
        toast.success(deleteuser.data.message);
      } else {
        toast.error("error");
      }
      console.log("first");
    } catch (error) {
      console.log(error, "Error in userDelete");
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="user">
      <h1 style={{ margin: "200px", color: "blue" }}>
        Are u sure you want to delete this user{" "}
      </h1>
    </div>
  );
};

export default UserDelete;
