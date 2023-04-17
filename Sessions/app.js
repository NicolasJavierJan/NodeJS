//import dotenv from "dotenv";
//dotenv.config();

import dotenv from "dotenv/config";

import express from "express";
import cors from "cors";
import session from "express-session";

const app = express();

app.use(cors());

app.use(session({
    // Never push the secret. Also do not use the default one.
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

  app.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    res.send({ message: `Hi ${req.session.name}`})
  })

  app.get("/gotham", (req, res) => {
    res.send({message: `I remember you ${req.session.name}`})
  })

app.get("/piblings", (req, res) => {
    res.send({ data: ["John", "Mark" ]})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);