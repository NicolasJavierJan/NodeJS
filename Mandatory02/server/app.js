import dotenv from "dotenv/config"

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import session from "express-session";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bcrypt from "bcrypt";

// Routes:
import authRouter from "./routers/auth.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({
  credentials: true,
  origin: true
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))

app.use("/auth", rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  // TODO:
  // Make this number smaller before turning the project in!
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}));

app.use(authRouter);

// Home Page, to check if it worked!
app.get("/", (req, res) => {
  if (req.session.name === "admin"){
    res.send("Hello, Admin! Lord of the Manor. King of the Castle");
  } else {
    res.send(`Hello there, ${req.session.name}`);
  }
})

// Contact E-Mail:
app.post('/contact', async (req, res) => {
  try {
    console.log(req.body);
    // Create a test account using createTestAccount
    let testAccount = await nodemailer.createTestAccount();

    // Create a transport object using the test account's SMTP details
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Send a test email
    let info = await transporter.sendMail({
      from: `${req.body.name} <${req.body.email}>`,
      to: 'Support Team <node-ledge@mandatory2.com>',
      subject: `${req.body.subject}`,
      text: `${req.body.text}`,
    });

    // Log the message URL to the console so you can view it in your browser
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Send a response to the client
    res.send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

const PORT = 8080;
app.listen(PORT);