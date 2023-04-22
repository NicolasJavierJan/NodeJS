<script>
    let username;
    let password;
    let message = "";

    function handleLogIn(){
        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password
            })
        })
        .then(response => {
            if (response.status === 200){
                window.location.href = "/main";
            } else if (response.status === 401){
                message = "Wrong Username or Password";
            }
        });
        
    }
</script>

<div class="login-signup-form">
    <h1 style="font-size: 36px">Login</h1>
    <form>
        <br>
        <div class="field">
        <label for="username">Username</label>
        <br>
        <input type="text" id="username" placeholder="Username" name="username" bind:value={username}>
        </div>
        <div class="field">
        <label for="password">Password</label>
        <br>
        <input type="password" id="password" placeholder="Password" name="password" bind:value={password}>
        </div>
        <br>
        <br>
        <div class="field">
        <button on:click={handleLogIn} type="button" id="login-button">Login</button>
        </div>
        <p>{message}</p>
    </form>
</div>