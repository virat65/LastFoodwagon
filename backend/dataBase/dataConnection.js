import mongoose  from "mongoose";
const dataConnect =async ()=>{
  try {
    const datat =await mongoose.connect(process.env.mongourl)
    // console.log(datat,"daaaa")
    console.log("Database connected")
  } catch (error) {
console.log(error,"error in dataBAse")
  }
}
export default dataConnect;