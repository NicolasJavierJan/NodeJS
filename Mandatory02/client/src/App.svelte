<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./pages/home/Home.svelte";
  import Login from "./pages/login/Login.svelte";
  import SignUp from "./pages/sign-up/Sign-up.Svelte";
  import Main from "./pages/main/Main.svelte";
</script>

<Router>
  <nav class="nav-bar">
    <Link to="/">Home</Link>
    <Link to="/login">Login!</Link>
    <Link to="/sign-up">Sign Up!</Link>
  </nav>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/sign-up">
      <SignUp />
    </Route>
    <Route path="/main">
      <Main />
    </Route>
</Router>


