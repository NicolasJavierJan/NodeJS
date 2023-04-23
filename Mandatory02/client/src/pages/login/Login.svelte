<script>

    import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../../stores/users.js";

    const navigate = useNavigate();
	const location = useLocation();

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
                user.set({ username, password });
                const from = ($location.state && $location.state.from) || "/main";
		        navigate(from, { replace: true });
            } else if (response.status === 401){
                message = "Wrong Username or Password";
            }
        });
        
    }
</script>

<div class="login-signup-form">
    <h1 style="font-size: 36px">Login</h1>
    <form on:submit|preventDefault={handleLogIn}>
        <br>
        <div class="field">
        <label for="username">Username</label>
        <br>
        <input type="text" id="username" placeholder="Username" name="username" bind:value={username} required>
        </div>
        <div class="field">
        <label for="password">Password</label>
        <br>
        <input type="password" id="password" placeholder="Password" name="password" bind:value={password} required>
        </div>
        <br>
        <br>
        <div class="field">
        <button type="submit" id="login-button">Login</button>
        </div>
        <p>{message}</p>
    </form>
</div>