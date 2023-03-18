// Imports Express. I have "type:module" in my package.json, so I have to use the "import" syntax.
import express from "express";
// Instantiation of the Express app.
const app = express();

// Import path for path.resolve
import path from "path";
// Import templateEngine functions for SSR.
import templateEngine from "./util/templateEngine.js";

// Using the public folder as the static folder.
app.use(express.static("public"));
app.use(express.json());

// Users Array, already populated with an "Admin" user.
const users = [
    {
        username: "admin",
        password: "admin"
    }
];

// FrontPage:
const frontPage = templateEngine.readPage("./public/pages/documentation/index/index.html");
const frontPagePage = templateEngine.renderPage(frontPage, {
    pageTitle: "NODE-LEDGE",
    cssLink: "./assets/css/index.css"
});

// First Class:
const firstClass = templateEngine.readPage("./public/pages/documentation/first-class/first-class.html");
const firstClassPage = templateEngine.renderPage(firstClass, {
    pageTitle: "First Class",
    cssLink: "./assets/css/documentation-pages.css"
})

// Second Class:
const secondClass = templateEngine.readPage("./public/pages/documentation/second-class/second-class.html");
const secondClassPage = templateEngine.renderPage(secondClass, {
    pageTitle: "Second Class"
})

// Third Class:
const thirdClass = templateEngine.readPage("./public/pages/documentation/third-class/third-class.html");
const thirdClassPage = templateEngine.renderPage(thirdClass, {
    pageTitle: "Third Class"
})

// Fourth Class:
const fourthClass = templateEngine.readPage("./public/pages/documentation/fourth-class/fourth-class.html");
const fourthClassPage = templateEngine.renderPage(fourthClass, {
    pageTitle: "Fourth Class"
})

// Fifth Class:
const fifthClass = templateEngine.readPage("./public/pages/documentation/fifth-class/fifth-class.html");
const fifthClassPage = templateEngine.renderPage(fifthClass, {
    pageTitle: "Fifth Class"
})

// Sixth Class:
const sixthClass = templateEngine.readPage("./public/pages/documentation/sixth-class/sixth-class.html");
const sixthClassPage = templateEngine.renderPage(sixthClass, {
    pageTitle: "Sixth Class"
})

// Seventh (LAST) Class:
const seventhClass = templateEngine.readPage("./public/pages/documentation/seventh-class/seventh-class.html");
const seventhClassPage = templateEngine.renderPage(seventhClass, {
    pageTitle: "Seventh Class"
})

// Sign-Up:
const signUp = templateEngine.readPage("./public/pages/sign-up/sign-up.html");
const signUpPage = templateEngine.renderAuthPage(signUp, {
    pageTitle: "Sign-Up",
    scriptLink: "./assets/js/sign-up.js" 
})

// Login:
const login = templateEngine.readPage("./public/pages/login/login.html");
const loginPage = templateEngine.renderAuthPage(login, {
    pageTitle: "Login",
    scriptLink: "./assets/js/login.js"
})

// New Page:
const newPage = templateEngine.readPage("./public/pages/documentation/newpage/newpage.html");
const newPagePage = templateEngine.renderPage(newPage, {
    pageTitle: "Create new page"
})

// Pages
app.get("/new-page", (req, res) => {
    res.send(newPagePage);
});

app.get("/sign-up", (req, res) =>{
    res.send(signUpPage);
});

app.get("/login", (req, res) => {
    res.send(loginPage);
});

app.get("/", (req, res) => {
    res.send(frontPagePage);
});

app.get("/first-class", (req, res) => {
    res.send(firstClassPage);
});

app.get("/second-class", (req, res) => {
    res.send(secondClassPage);
});

app.get("/third-class", (req, res) => {
    res.send(thirdClassPage);
});

app.get("/fourth-class", (req, res) => {
    res.send(fourthClassPage);
});

app.get("/fifth-class", (req, res) => {
    res.send(fifthClassPage);
});

app.get("/sixth-class", (req, res) => {
    res.send(sixthClassPage);
});

app.get("/seventh-class", (req, res) => {
    res.send(seventhClassPage);
});

app.get("/api/users", (req, res) => {
    // DISCLAIMER: I WOULD NEVER DO THIS IN REAL LIFE.
    res.send({ users: users });
});

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
});