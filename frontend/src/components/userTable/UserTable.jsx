import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import axios from "axios";
import API from "../Product/backendrouting";
import "./UserTable.css"; // 🔹 Import your CSS file
import { useNavigate } from "react-router-dom";
const UserTable = () => {
  const getcookies = cookies.get("userInfo");
  const avilableCookie = getcookies ? JSON.parse(getcookies) : null;
  const [info, setInfo] = useState([]);
  const [searchuser, setSearchuser] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const userData = await axios.get(API.findAll.url, {
        headers: {
          Authorization: `Bearer ${avilableCookie.token}`,
        },
      });
      console.log(userData, "userDataaa");
      setInfo(userData.data.body);
    } catch (error) {
      console.log(error, "error in getData");
    }
  };
  const navigatedId = (id) => {
    navigate(`/userview/${id}`);
  };
  const userDelete = (id) => {
    navigate(`/userdelete/${id}`);
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setSearchuser(inputValue);
    console.log(inputValue);
  };
  const filterUsers = (arr) => {
    if (!searchuser) return arr;
    else {
      return arr.filter((user) =>
        user.name.toLowerCase().includes(searchuser.toLowerCase())
      );
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="user-table-wrapper pt-5">
      <div className="top-usertable d-flex justify-content-evenly mb-2">
        <h2>User Table</h2>

        <div className="d-flex align-items-center gap-2">
    <input
      type="text"
      id="username"
      className="form-control"
      style={{ width: "250px" }}
      placeholder="🔍 Search by name..."
      value={searchuser}
      onChange={handleChange}
    />
  </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Photo</th>
            <th>User View</th>
            <th>User Delete</th>
          </tr>
        </thead>
        <tbody>
          {filterUsers(info).map((e, index) => (
            <tr key={e._id || index}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>
                <img src={e.pic} alt="user" />
              </td>
              <td>
                <button
                  onClick={() => navigatedId(e?._id)}
                  className="px-3 py-1 bg-success text-white"
                >
                  View
                </button>
              </td>
              <td>
                <button
                  onClick={() => userDelete(e?._id)}
                  className="px-2 py-1 bg-danger text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
