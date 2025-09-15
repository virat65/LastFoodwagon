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

dotenv.config();
const app = express();
const port = process.env.PORT || 1234;

// Middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

// Static folders (optional if using Cloudinary)
const currentpath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentpath);
app.use("/images", express.static(path.join(currentDir, "Public/images")));
app.use("/productImages", express.static(path.join(currentDir, "Public/productImages")));

// Routes
app.use("/user", userRouter);
app.use("/product", ProductRouter);
app.use("/cart", cartRoutes);

// Database connection
dataConnect();

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
