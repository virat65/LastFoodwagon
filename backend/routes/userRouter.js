import express from "express"
import { deleteAll, deleteuser, findAll, findbybody, findByid, login, signup, updateuser, verifyEmail } from "../controller/userController.js"
import usermiddleware from "../middleware/usermiddleware.js"
const userRouter = express.Router()
userRouter.post("/sign",signup)
userRouter.post("/verifyemail",verifyEmail)
userRouter.post("/login",login)
userRouter.get("/findAll",usermiddleware,findAll)
userRouter.post("/findbyid/:id",findByid)
userRouter.delete("/delete/:id",deleteuser)
userRouter.delete("/deleteAll",usermiddleware,deleteAll)
userRouter.post("/findbybody",findbybody)
userRouter.put("/updateuser/:id",updateuser)
export default userRouter