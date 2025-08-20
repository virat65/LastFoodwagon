import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
const usermiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token, "token");
  const tokensplit = token.split(" ")[1];
  console.log(tokensplit, "tokenSplit");

  const tokenverify = jwt.verify(tokensplit, process.env.secreateKey);
  console.log(tokenverify, "tokenverify");
  console.log("middleware called");
  const userdata = await userModel.findById({ _id:tokenverify.id });
    console.log(userdata,"userdataaaaa");
  if (userdata.token != tokensplit) {
    return res.json({
      message: "please login again ",
      status: 404,
      success: false,
    });
  } else {
    req.user = userdata;
    next();
  }
};
export default usermiddleware;
