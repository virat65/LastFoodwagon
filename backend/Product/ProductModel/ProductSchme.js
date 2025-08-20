import mongoose from "mongoose";
const productSchma = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    description: { type: String, default: "" },
    price: { type: Number, default: 0 },
    photo: { type: String, default: "" },
    category: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
const productModel = mongoose.model("product",productSchma)
export default productModel;