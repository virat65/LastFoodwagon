import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create transporter with environment variables for security
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "virat1322420@gmail.com",
    pass:  "koyc wcph vuvl busk",
  },
});

// Test the transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log("Email transporter error:", error);
  } else {
    console.log("Email transporter ready to send messages");
  }
});
