import express from "express";
const app = express();

import cors from "cors";

app.use(cors({
    credentials: true,
    origin: true
}));

import planetsRouter from "./routers/planetsRouter.js";
import personRouter from "./routers/personRouter.js";
//app.use(express.static("../client/dist"));
app.use(express.json());

app.use(planetsRouter); // Uses that middleware to the Server
app.use(personRouter);


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log("Server is running on port ", server.address().port));