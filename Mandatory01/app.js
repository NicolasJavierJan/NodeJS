// Imports Express. I have "type:module" in my package.json, so I have to use the "import" syntax.
import express from "express";
// Instantiation of the Express app.
const app = express();

import path from "path";

// Using the public folder as the static folder.
app.use(express.static(path.resolve("public")));
app.use(express.json());

const users = [
    {
        username: "admin",
        password: "admin"
    }
];

// 
app.get("/sign-up", (req, res) =>{
    res.sendFile(path.resolve("public/pages/sign-up/sign-up.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("public/pages/login/login.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/documentation/index/index.html"))
})

app.get("/api/users", (req, res) => {
    // DISCLAIMER: I WOULD NEVER DO THIS IN REAL LIFE.
    res.send({ users: users })
})

app.post("/api/users", (req, res) => {
    const userToCreate = req.body;
    users.push(userToCreate);
    res.send({ code: "500" });
})

// Using Port 8080
const PORT = 8080;

// Listening to Port 8080. If error, logs the error.
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Listening on Port ", PORT);
    }
})