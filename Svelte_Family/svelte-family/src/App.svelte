<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "./store/urlDomain";
  import Home from "./components/Home/Home.svelte";
  import Nibling from "./components/Nibling/Nibling.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

  // 
  onMount(async () => {
    const response = await fetch(`${$BASE_URL}/piblings`);
  })


  const piblings = ["John", "Mark"];
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true,
      allowance: 0,
      cookies: []
    },
    {
      id: 2,
      name: "Amelie",
      isGirl: true,
      blackSheep: "Medium-Black-Sheep",
      allowance: 0,
      cookies: []
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "Ultra-Black-Sheep",
      allowance: 0,
      cookies: []
    }
  ]
</script>

<Home>
  <h2>This is the Home of the Svelte Family</h2>
  <Pibling name = { piblings[0]} niblings = {niblings}/>
  <Pibling name = { piblings[1]} niblings = {niblings}/>
</Home>