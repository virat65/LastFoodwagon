import { Verification_Email_Template, Welcome_Email_Template } from "./EmailTemplate.js"
import { transporter } from "./EmailConfig.js"

export const sendVerificationCode = async(useremail,verificationOTP)=>{
  try {
const response = await transporter.sendMail({

      from: '"FoodWagon" <virat1322420@gmail.com>',
      to:useremail,
      subject: "Verify Your Email",
      text: "This Email is regarding verifying your email Address", // plain‑text body
      html: Verification_Email_Template.replace("{verificationCode}",verificationOTP), // HTML body

})
console.log(response,"response from sendVerificationCode")
console.log("Email Sent Successfully")
  } catch (error) {
console.log(error,"Error in sendVerificationCode")
  }
}

export const sendWelcomeEmail = async(usermailaddress,username)=>{
  try {
const response = await transporter.sendMail({

      from: '"FoodWagon" <virat1322420@gmail.com>',
      to:usermailaddress,
      subject: "Verify Your Email",
      text: "This Email is regarding verifying your email Address", // plain‑text body
      html:Welcome_Email_Template.replace("{name}",username)// HTML body

})
console.log(response,"response from sendVerificationCode")
console.log("Email Sent Successfully")
  } catch (error) {
    console.log(error,"Error in sendWelcomeEmail")

  }
}