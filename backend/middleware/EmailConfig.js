import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create a test account or replace with real credentials.
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.verificationId || "virat1322420@gmail.com",
    pass: process.env.verificationPassword || "gnsnwpdmsuonzfmh",
  },
});
