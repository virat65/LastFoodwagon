import express from "express";
import dotenv from "dotenv";
import dataConnect from "./dataBase/dataConnection.js";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import ProductRouter from "./routes/ProductRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
const app = express();
dotenv.config();
const port = process.env.baseurl;
app.use(express.json());
const currentpath = fileURLToPath(import.meta.url);
console.log(currentpath, "current file path");
const currentDir = path.dirname(currentpath);
console.log(currentDir, "currentDireactory");
app.use("/images", express.static(path.join(currentDir, "Public/images")));
app.use(
  "/productImages",
  express.static(path.join(currentDir, "Public/productImages"))
);
app.use(fileUpload());
app.use(cors());
app.use("/user", userRouter);
app.use("/product", ProductRouter);
app.use("/cart", cartRoutes);
dataConnect();
app.listen(port, () => {
  console.log(`server is runnnin on ther ${port}`);
});
