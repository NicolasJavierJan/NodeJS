// Call the server file app.js
// Conventions in Express.

// Import express.
const express = require("express");

// If I want to use Express, I have to instantiate it.
const app = express();

//We can do it in one line by:
// const app = require("express")();

// If we want to parse json:
app.use(express.json());

// Run a server:

// HTTP Method (GET):
// This is a route: 
app.get("/", (req, res) => {
    res.send({ message: "Our first route" });
})

let bycicleSpin = 0;
app.get("/spinthebycicle", (req, res) => {
    bycicleSpin += 1;
    res.send({ message: `People have spun the wheel ${bycicleSpin} times`});
})

app.get("/kickthedinosaur", (req, res) => {
    res.send({ dinosaurSays: "ow ow ow"});
});

// Why do we send json? 
// Every language has a library that can interpret json. It's a specific language with rules to specify data.

// You can also send HTTP.
app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about page...!</h3>
    `)
})

// /bat?adjective=spooky
app.get("/bat", (req, res) => {
    console.log(req.query);
    res.send({message: `The bat is ${req.query.adjective}`});
})

// /bottle/large => wont be found if app.get is just "/bottle"
app.get("/bottle/:bottleSize", (req, res) => {
    console.log(req.params);
    res.send({ theBottleIs: req.params.bottleSize })
})

app.get("/time/time", (req, res) => {
    res.send({time: new Date()});
    // We can do Date() TimeLocal, new Date()timeUTC, Date.now() UnixTime
})

app.get("/time/day", (req, res) => {
    res.send({data: new Date().toLocaleString('default', {weekday: 'long'})})
})

app.get("/time/month", (req, res) => {
    res.send({data: new Date().toLocaleString('default', {month: 'long'})})
    // We can also use toLocaleString('da-dk') and it will do it in the language you provide
})

// POST: 
app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({ message: req.body });
});

// Make it listen to a port:
app.listen(8080);
// 8080 is the HTTP Developer Port.
