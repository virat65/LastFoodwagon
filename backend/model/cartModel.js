import mongoose from "mongoose";
const CartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      default: null,
    },
    quantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const cartModel = mongoose.model("cartmodel", CartSchema);
export default cartModel;
