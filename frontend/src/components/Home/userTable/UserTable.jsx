import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import axios from "axios";
import API from "../../Product/backendrouting";
import "./UserTable.css"; // 🔹 Import your CSS file
import { useNavigate } from "react-router-dom";
const UserTable = () => {
  const getcookies = cookies.get("userInfo");
  const avilableCookie = getcookies ? JSON.parse(getcookies) : null;
  const [info, setInfo] = useState([]);
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
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="user-table-wrapper">
      <h2>User Table</h2>
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
          {info.map((e, index) => (
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
