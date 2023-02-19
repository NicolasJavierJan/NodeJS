const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    // To serve files, like html files, you do res.sendFile(path)
    // __dirname is like doing pwd to get the path.
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
})

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
})

app.listen(8080);

// Falsy values
// Undefined, false, NaN, null, empty string
const falsy = undefined;
if (falsy) {
    console.log("NO");
}
