import express from "express"
import { AllProducts, findProductById, newProduct } from "../ProductController/ProductController.js"

const ProductRouter = express.Router()
ProductRouter.post("/create",newProduct)
ProductRouter.get("/AllProducts",AllProducts)
ProductRouter.post("/findProductbyid/:id",findProductById)
export default ProductRouter;
