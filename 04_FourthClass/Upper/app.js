//const express = require("express");
//const app = express();

// Name of the folder in nodemodules (express)
import express from "express";
const app = express();

app.use(express.static("public"));

//const jokes = require("./util/jokes");
//import jokes from "./util/jokes.js";

// __dirname does not work.
import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
})

app.get("/quests", (req, res) => {
    res.sendFile(path.resolve("public/pages/quests/quests.html"));
})


const PORT = 8080;

app.listen(PORT, (error) => {
    if (error)
    {
        console.log(error);
    } else {
        console.log("Server is running on port ", PORT);
    }
})