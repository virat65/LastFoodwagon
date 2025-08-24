import express from "express";
import {
  AllProducts,
  deleteProduct,
  findProductById,
  newProduct,
} from "../ProductController/ProductController.js";

const ProductRouter = express.Router();
ProductRouter.post("/create", newProduct);
ProductRouter.get("/allProducts", AllProducts);
ProductRouter.get("/findProductbyid/:iddd", findProductById);
ProductRouter.delete("/deleteProduct/:idd", deleteProduct);
export default ProductRouter;
