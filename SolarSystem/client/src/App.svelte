<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/home/Home.svelte";
  import Planets from "./pages/planets/Planets.svelte";

</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/planets">Planets</Link>
  </nav>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/planets">
    <Planets />
  </Route>
</Router>