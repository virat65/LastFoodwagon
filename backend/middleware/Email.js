import {
  Verification_Email_Template,
  Welcome_Email_Template,
} from "./EmailTemplate.js";
import { transporter } from "./EmailConfig.js";

export const sendVerificationCode = async (useremail, verificationOTP) => {
  try {
    console.log("inside sendverifaction code ");
    console.log("Sending email to:", useremail);
    const response = await transporter.sendMail({
      from: '"FoodWagon" <virat1322420@gmail.com>',
      to: useremail,
      subject: "Verify Your Email",
      text: "This Email is regarding verifying your email Address",
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationOTP,
      ),
    });
    console.log(response, "response from sendVerificationCode");
    console.log("Email Sent Successfully");
    return { success: true, message: "Verification email sent successfully" };
  } catch (error) {
    console.log(error, "Error in sendVerificationCode");
    throw new Error(`Email sending failed: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (usermailaddress, username) => {
  try {
    console.log("Sending welcome email to:", usermailaddress);
    const response = await transporter.sendMail({
      from: '"FoodWagon" <virat1322420@gmail.com>',
      to: usermailaddress,
      subject: "Welcome to FoodWagon",
      text: "Welcome to FoodWagon",
      html: Welcome_Email_Template.replace("{name}", username),
    });
    console.log(response, "response from sendWelcomeEmail");
    console.log("Email Sent Successfully");
    return { success: true, message: "Welcome email sent successfully" };
  } catch (error) {
    console.log(error, "Error in sendWelcomeEmail");
    throw new Error(`Email sending failed: ${error.message}`);
  }
};
