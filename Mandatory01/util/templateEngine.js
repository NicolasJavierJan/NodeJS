import fs from "fs";

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

function renderPage(page, config = {}){
    const navBar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
    .replace("$PAGE_TITLE", config.pageTitle || "NODE-LEDGE")
    .replace("$CSS_LINK", config.cssLink || "./assets/css/documentation-pages.css");
    const scripts = fs.readFileSync("./public/components/scripts/scripts.html").toString()
    .replace("$SCRIPT_LINK", config.scriptLink || "./assets/js/index.js");
    return navBar +  page + scripts;
}

function renderAuthPage(page, config = {}){
    const header = fs.readFileSync("./public/components/auth-header/auth-header.html").toString()
    .replace("$PAGE_TITLE", config.pageTitle || "NODE-LEDGE")
    .replace("$CSS_LINK", config.cssLink || "./assets/css/sign-up-login.css");
    const scripts = fs.readFileSync("./public/components/auth-scripts/auth-scripts.html").toString()
    .replace("$SCRIPT_LINK", config.scriptLink);
    return header + page + scripts;
}

export default {
    readPage,
    renderPage,
    renderAuthPage
}