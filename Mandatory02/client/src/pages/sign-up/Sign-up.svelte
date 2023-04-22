<script>
    let username;
    let password;
    let email;
    let message = "";

    function handleSignUp(){
        fetch("http://localhost:8080/auth/sign-up", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
                'email': email
            })
        })
        .then(response => {
            if (response.status === 200){
                window.location.href = "/login";
            } else if (response.status === 400){
                message = "User already exists";
            }
        });
        
    }
</script>

<div class="login-signup-form">
    <h1 style="font-size: 36px">Sign-Up</h1>
    <form>
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
        <div class="field">
            <label for="email">E-mail</label>
            <br>
            <input type="email" id="email" placeholder="E-Mail" name="email" bind:value={email}>
        </div>
        <br>
        <div class="field">
        <button on:click={handleSignUp} type="button" id="sign-up-button">Sign Up</button>
        </div>
        <p>{message}</p>
    </form>
</div>