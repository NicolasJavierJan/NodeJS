const express = require("express");
const app = express();

app.use(express.static("public"));

const tanksUtil = require("./util/tanks.js");
//console.log(tanksUtil.getTanks());

const { getTanks, addTank } = require("./util/tanks.js")

let visitorCount = 0;

/*
const tanks = [
    {name: "Leopard", nationality: "Germany"},
    {name: "Tiger", nationality: "Germany"}
]
*/

// Pages

app.get("/", (req, res) => {
    // To serve files, like html files, you do res.sendFile(path)
    // __dirname is like doing pwd to get the path.
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
})

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
})

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
})

// TODO serve a page called museum guards
app.get("/museumGuards", (req, res) => {
    res.sendFile(__dirname + "/public/museumGuards/museumGuards.html")
})

// API

app.get("/api/tanks", (req, res) => {
    res.send({data: getTanks()})
})

app.get("/api/visitors", (req, res) => {
    res.send({data: visitorCount})
})

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
})

app.listen(8080);

// Falsy values
// Undefined, false, NaN, null, empty string
const falsy = undefined;
if (falsy) {
    console.log("NO");
}
