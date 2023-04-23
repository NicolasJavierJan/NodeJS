<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./pages/home/Home.svelte";
  import Login from "./pages/login/Login.svelte";
  import SignUp from "./pages/sign-up/Sign-up.Svelte";
  import Main from "./pages/main/Main.svelte";
  import ContactPage from "./pages/contact/ContactPage.svelte";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import { user } from "./stores/users.js";

  function handleLogout(){
    $user = null;
    fetch("http://localhost:8080/auth/logout", {
      method: "GET",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            }
    }).then(response => {
      if (response.status === 200){
        window.location.href = "/";
      }
    });
  }
</script>

<Router>
  <nav class="nav-bar">
    <Route path="/">
      <Link to="/sign-up">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Home />
    </Route>
    <Route path="/sign-up">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <SignUp />
    </Route>
    <Route path="/login">
      <Link to="/">Home</Link>
      <Link to="/sign-up">Sign Up</Link>
      <Login />
    </Route>
    <PrivateRoute path="/main" let:location>
      <Link to="#" on:click={handleLogout}>Logout</Link>
      <Main />
    </PrivateRoute>
    <Route path="/contact">
      <ContactPage />
    </Route>
  </nav>
</Router>


