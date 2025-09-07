import express from "express";
import {
  createCart,
  deleteAllCartItems,
  deleteSingleCartItem,
  findAllCartItems,
  findSingleCartItem,
  updateCart,
} from "../controller/CartController.js";
import usermiddleware from "../middleware/usermiddleware.js";

const cartRoutes = express.Router();
cartRoutes.post("/createcart", usermiddleware, createCart);
cartRoutes.get("/getallcartitems", usermiddleware, findAllCartItems);
cartRoutes.get("/getcartitem", usermiddleware, findSingleCartItem);
cartRoutes.put("/updatecartitem/:id", usermiddleware, updateCart);
cartRoutes.delete("/deleteallcartitems", usermiddleware, deleteAllCartItems);
cartRoutes.delete(
  "/deletesinglecart/:id",
  usermiddleware,
  deleteSingleCartItem
);
export default cartRoutes;
