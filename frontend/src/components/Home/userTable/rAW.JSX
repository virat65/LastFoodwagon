// import React from "react";
// import cookies from "js-cookie";
// import { useState } from "react";
// import axios from "axios";
// import API from "../../login/backendrouting";
// import { useEffect } from "react";
// const UserTable = () => {
//   const getcookies = cookies.get("userInfo");
//   const avilableCookie = getcookies ? JSON.parse(getcookies) : null;
//   const [info, setInfo] = useState([]);
//   const getData = async () => {
//     try {
//       const userData = await axios.get(API.findAll.url, {
//         headers: {
//           Authorization: `Bearer ${avilableCookie.token}`,
//         },
//       });
//       setInfo(userData.data.body);
//       console.log(userData, "userdataaa");
//     } catch (error) {
//       console.log(error, "error in getDAta");
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div style={{ marginTop: "100px",marginRight:"100px",width:"80%", height:"80%",  padding:"40px 60px"}}>
//       <table>
//         <thead>
//           <tr className="">
//             <th>S.no</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th> photo </th>
//           </tr>
//         </thead>
//         <tbody>

//             {info.map((e, index) => {
//               return (
//                 <><tr>
//                   <td>{index + 1}</td>
//                   <td>{e.name}</td>
//                   <td>{e.email}</td>
//                   <td>{e.pic}</td>  </tr>
//                 </>
//               );
//             })}

//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;