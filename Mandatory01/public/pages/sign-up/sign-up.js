const user = sessionStorage.getItem("username");
if (user !== null){
    window.location.replace("/");
}

const signUpButton = document.getElementById("sign-up-button");
const form = document.getElementById("sign-up-form");

signUpButton.addEventListener("click", () => {
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    fetch("/api/users", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.code === '500'){
            alert("User was created!");
            window.location.replace("/login");
        }
    });
})