
import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import axios from "axios";
import API from "../../login/backendrouting";
import "./UserTable.css"; // 🔹 Import your CSS file
import { useNavigate } from "react-router-dom";
const UserTable = () => {
  const getcookies = cookies.get("userInfo");
  const avilableCookie = getcookies ? JSON.parse(getcookies) : null;
  const [info, setInfo] = useState([]);
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const userData = await axios.get(API.findAll.url, {
        headers: {
          Authorization: `Bearer ${avilableCookie.token}`,
        },
      });
      console.log(userData,"userDataaa")
      setInfo(userData.data.body);
    } catch (error) {
      console.log(error, "error in getData");
    }
  };
const navigatedId = (id)=>{
  navigate(`/userview/${id}`)
}
const userDelete = (id)=>{
  navigate(`/userdelete/${id}`)
}
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
            <th>Userview  </th>
            <th>UserDelete  </th>
          </tr>
        </thead>
        <tbody>
          {info.map((e, index) => (
            <tr key={e._id || index}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              {console.log(e,"eeee")}
              <td>{e.email}</td>
              <td>
                <img src={e.pic} alt="user" />
              </td>
              <td><button onClick={()=>navigatedId(e?._id)}>view</button></td>
              <td><button onClick={()=>userDelete(e?._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
