import imageUpload from "../helper/imageUploading.js";
import { sendVerificationCode, sendWelcomeEmail } from "../middleware/Email.js";
import userModel from "../model/userModel.js";
import tokenGen from "../tokenGen/tokenGen.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    console.log(req.body);
    const emailFind = req.body?.email?.trim();
    const phoneFind = req.body?.phone?.trim();
    const query = [];
    // console.log(query,"query")
    if (emailFind) {
      query.push({ email: new RegExp(`^${emailFind}$`, "i") });
    }
    if (phoneFind) {
      query.push({ phone: phoneFind });
    }

    if (query.length === 0) {
      return res.json({
        message: "Email or Phone are Required",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      // console.log(query

      // )
      const findUser = await userModel.findOne({ $or: query });
      if (findUser) {
        return res.json({
          message: "user already exists",
          status: 400,
          success: false,
          body: {},
        });
      } else {
        const passwordEncrypt = await bcrypt.hash(req.body.password, 10);
        const opt = Math.floor(100000 + Math.random()* 900000).toString()
        console.log(opt,"Verification code")
        const expiryTime = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
        console.log(expiryTime,"ExpiryTime")

        if (req.files?.image?.name) {
          const photo = req.files.image;
          console.log(photo, "photoooooooo");
          if (photo) {
            req.body.image = imageUpload(photo);
            console.log(req.body.image, "request.body.image");
          }
        }

        const user = await userModel.create({
          ...req.body,
          password: passwordEncrypt,
          image: req.body.image,
          verificationCode:opt,
          verficationCodeExpiresAt:expiryTime
        });
        console.log(user, "userrrr");
        const tokenCall = await tokenGen(user._id);
        user.token = tokenCall.createToken;
        user.logintime = tokenCall.decodeToken.iat;
        user.save();
        sendVerificationCode(user.email,opt) //sending verification otp
        console.log(req.files, "filesssssss");

        return res.json({
          message: "user created",
          status: 200,
          success: true,
          body: user,
        });
      }
    }
  } catch (error) {
    console.log(error, "error in signup");
  }
};
export const verifyEmail = async(req,res)=>{
  try {
    const {otpCode} = req.body //send by the user to verify his account
    const user = await userModel.findOne({verificationCode:otpCode})
if(!user){
  return res.json({success:false,message:"Inavlid or Epired OTP"})
}

else{
  user.isverified= true
 user.verificationCode= undefined
 await user.save()
 await sendWelcomeEmail(user.email,user.name)
 return res.json({
  success:true,
  status:200,
  message:"Account Verified successfully",
  body:user
 })
}
  } catch (error) {
console.log(error,"Error in verifyEmail")
 return res.json({success:false,message:"Internal server Error",body:user})
  }
}
export const login = async (req, res) => {
  try {
    const emailFind = req.body?.email?.trim();
    const phoneFind = req.body?.phone?.trim();
    const query = [];
    if (emailFind) {
      query.push({ email: RegExp(`^${emailFind}$`) });
    }
    if (phoneFind) {
      query.push({ phone: phoneFind });
    }
    if (query.length === 0) {
      return res.json({
        message: "Email or phone required",
        success: false,
        status: 200,
        body: {},
      });
    } else {
      console.log(query, "query");
      const user = await userModel.findOne({ $or: query });
      console.log(user, "userrrr");
      console.log(req.body, "reqq from login");

      if (!user) {
        return res.json({
          message: "user not found",
          status: 400,
          success: false,
          body: {},
        });
      } else {
        const passwordMatch = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!passwordMatch) {
          return res.json({
            message: "wrong password",
            status: 404,
            success: false,
            body: {},
          });
        } else {
          console.log(user, "userrrr");
          const tokenCall = await tokenGen(user._id);
          user.token = tokenCall.createToken;
          user.logintime = tokenCall.decodeToken.iat;
          user.save();
          return res.json({
            message: "login succesfully",
            status: 200,
            success: true,
            body: user,
          });
        }
      }
    }
  } catch (error) {
    console.log(error, "error in login");
  }
};
export const findAll = async (req, res) => {
  try {
    const users = await userModel.find();
    const allusers = users.map((e) => {
      return {
        ...e.toObject(),
        // pic: `http://localhost:1234/images/${e.image}`,
        pic: `${process.env.baseurl}/images/${e.image}`,
      };
    });
    return res.json({ body: allusers });
  } catch (error) {
    console.log("Errro in findAll", error);
  }
};
export const deleteuser = async (req, res) => {
  try {
    const user = await userModel.deleteOne({ _id: req.params.id });
    return res.json({
      message: "user deleted successfully",
      status: 200,
      success: true,
      body: user,
    });
  } catch (error) {
    console.log(error, "Error in delete");
  }
};
export const findByid = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.json({
        message: "user not found",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      return res.json({
        message: "user found",
        status: 200,
        success: true,
        body: user,
      });
    }
  } catch (error) {
    console.log(error, "Error in findById");
  }
};
export const deleteAll = async (req, res) => {
  try {
    const users = await userModel.deleteMany({});
    return res.json({
      message: "users delelted",
      status: 200,
      success: true,
      body: users,
    });
  } catch (error) {
    console.log(error, "Error in deletAll");
  }
};

export const findbybody = async (req, res) => {
  try {
    const user = await userModel.findOne(req.body.email);
    console.log(user, "userrrr");
    return res.json({
      message: "user finded",
      status: 200,
      success: true,
      body: user,
    });
  } catch (error) {
    console.log(error, "error");
  }
};

export const updateuser = async (req, res) => {
  try {
    const decryptPassword = await bcrypt.hash(req.body.password, 10);

    const user = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body, password: decryptPassword },
      { new: true }
    );

    if (!user) {
      return res.json({
        message: "user not found",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      return res.json({
        message: "user updated",
        status: "200",
        body: user,
        success: true,
      });
    }
  } catch (error) {
    console.log(error, "Error in updateuser");
  }
};
