import express from "express";
import cors from "cors";
import session from "express-session";
import helmet from "helmet";

const app = express();
app.use(helmet());
// Middleware:
function houseButler(req, res, next) {
    console.log("This way...");
    next();
}

app.use("/room", houseButler);

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter);

app.use(cors());

app.use(session({
    // Never push the secret. Also do not use the default one.
    secret: "keyboard",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

import rateLimit from 'express-rate-limit'

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(apiLimiter)

  import gothamRouter from "./routers/gothamRouter.js";
  app.use(gothamRouter);

  app.use("/auth", rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  }))

  import authRouter from "./routers/auth.js";
  app.use(authRouter);

function guard(req, res, next) {
    // For the session keys!!!!
    if (req.query.name === "Anders"){
        req.myName = "Anders";
        next();
    } else {
        res.send({ message: "you're not allowed to enter "});
    }
}

app.get("/frontdoor", guard, (req, res) => {
    res.send({ message: `please enter, ${req.myName}` });
})


// Fallback Route:
app.get("*", (req, res) => {
    res.send("<h1>404 - Not Found</h1>")
})

const PORT = 8080;
app.listen(PORT);