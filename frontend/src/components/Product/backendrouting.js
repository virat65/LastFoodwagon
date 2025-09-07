const backendUrl =import.meta.env.VITE_BACKENDURL;
console.log(backendUrl,"backendurl")
const API = {
  signup: {
    method: "post",
    url: `${backendUrl}/user/sign`,
  },
  login: {
    url: `${backendUrl}/user/login`,
    method: "post",
  },
    findAll: {
    url: `${backendUrl}/user/findAll`,
    method: "get",
  },
  finduserbyid :{
    url:`${backendUrl}/user/findbyid`,
    method:"post"
  },
  deleteuser :{
    url:`${backendUrl}/user/delete`,
    method:"delete"
  }
};
export default API;
