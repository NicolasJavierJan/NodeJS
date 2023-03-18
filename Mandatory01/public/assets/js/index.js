const user = sessionStorage.getItem("username");
const newPageButton = document.getElementById("new-page");
const logoutButton = document.getElementById("logout");


newPageButton.addEventListener("click", () => {
    window.location.replace("/new-page");
})

logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("username");
    window.location.replace("/login");
})

if (user === null){
    window.location.replace("/login");
} else if (user === "admin"){
    newPageButton.style.display = "block";
}