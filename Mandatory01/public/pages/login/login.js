const user = sessionStorage.getItem("username");
if (user !== null){
    window.location.replace("/");
}

const loginButton = document.getElementById("login-button");
const form = document.getElementById("login-form");

loginButton.addEventListener("click", () => {
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    fetch("/api/users").then(response => response.json()).then(result => {
        const userFind = result.users.find((user) => user.username === username && user.password === password);
        if (userFind != null){
            sessionStorage.setItem("username", username);
            window.location.replace("/");
        } else {
            alert("Wrong username and/or password");
        }
    });
})

