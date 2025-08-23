import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    logintime: { type: Number, default: 0 },
    password: { type: String, default: "" },
    email: { type: String, default: "" },
    image: { type: String, default: "" },
    phone: { type: String, default: "" },
    token: { type: String, default: "" },
    userType: { type: String,default:["user","Admin"] },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("user", schema);

export default userModel;
