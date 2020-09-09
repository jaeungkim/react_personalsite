const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  host: "smtp.live.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.email, // your email address to send email from
    pass: process.env.password // your gmail account password
  }
});

module.exports = transporter;