import axios from "axios";
import React, { useEffect ,useState} from "react";
import "./Userview.css"
import { Link,useParams } from "react-router-dom";
import API from "../login/backendrouting.js";
const Userview = () => {
  const [info, setInfo] = useState("");
  const {id} = useParams();
  console.log("ID from params:", id);

  const getData = async () => {
    try {
      const userInfo = await axios.post(`${API.finduserbyid.url}/${id}`);
      console.log(userInfo,"userinfoooo")
      // Add pic property to userInfo if image exists
      const user = userInfo.data.body;
      if (user && user.image) {
        // user.pic = `http://localhost:1234/images/${user.image}`;
         user.pic = `${import.meta.env.VITE_BACKENDURL}/images/${user.image}`;
      }
      setInfo(user);
    } catch (error) {
      console.log("error in userview", error);
    }
  }; 
  useEffect(()=>{
getData()
  },[id])
  return <div>

        <div className="bg-amber-100 flex items-center justify-center h-screen px-4 user">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center space-y-4">
        <div className="flex justify-center">
          <img
            src={info.pic}
            alt="User"
            className="w-24 h-24 rounded-full object-cover border-4 border-amber-300"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{info.name}</h2>
          <p className="text-gray-600">{info.email}</p>
        </div>
        <Link
          to="/usertable"
          className="p-1  inline-block mt-1 bg-green-500 text-white  rounded-lg hover:bg-amber-600 transition bg-primary "
        >
          Back to User List
        </Link>
      </div>
    </div>
  </div>;
};

export default Userview;
