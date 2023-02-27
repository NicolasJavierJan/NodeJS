const express = require("express");
const app = express();

app.get("/time", (req, res) => {
    

    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
})

app.listen(8080);