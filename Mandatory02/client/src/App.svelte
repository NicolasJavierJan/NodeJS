<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./pages/home/Home.svelte";
  import Login from "./pages/login/Login.svelte";
  
</script>

<Router>
  <nav class="nav-bar">
    <Link to="/">Home</Link>
    <Link to="/login">Login!</Link>
  </nav>
  <div class="main-page">
    <Route path="/">
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </div>
</Router>


