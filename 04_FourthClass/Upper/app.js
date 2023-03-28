import express from "express";
const app = express();

import path from "path";

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

import getJoke from "./util/jokes.js";

import templateEngine from "./util/templateEngine.js";

const frontPage = templateEngine.readPage("./public/pages/frontpage/frontpage.html")
//const jokesPath = "./public/pages/jokes/jokes.html"
const contactPage = templateEngine.readPage("./public/pages/contact/contact.html");

// Constructed pages
//const frontpagePage = navbar + frontpage + footer;
const frontpagePage = templateEngine.renderPage(frontPage, {
    tabTitle: "Welcome",
    cssLink: "" // `<link rel=stylesheet href="etc etc"1`
});

const contactPagePage = templateEngine.renderPage(contactPage, {
    tabTitle: "Contact"
})

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/contact", (req, res) => {
    res.send(contactPagePage);
}) 

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"));
});

app.get("/jokes", async (req, res) => {
    const joke = await getJoke();
    const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html").replace("$JOKE", JSON.stringify(joke));
    const jokesPage = templateEngine.renderPage(jokes, {
        tabTitle: "ADDD",
    })
    res.send(jokesPage);
});

// API

app.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/");
})

// For accessing environment variables
console.log(process.env.PORT);


const PORT = process.env.PORT || 8080;  
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", PORT);
});