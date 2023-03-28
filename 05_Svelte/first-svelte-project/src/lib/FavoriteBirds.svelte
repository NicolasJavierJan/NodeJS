<script>
    import Bird from "./Bird.svelte";
    const birds = ["Pigeon", "Duck", "Other"];
    const birdEmoji = ["🐦", "🦆", "🦆"];

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex]
    let favoriteBirdEmoji = birdEmoji[birdIndex]

    function changeFavoriteBird(){
        birdIndex = (birdIndex + 1) % birds.length;
        favoriteBird = birds[birdIndex];
        favoriteBirdEmoji = birdEmoji[birdIndex];
    }
</script>

<div 
on:click={changeFavoriteBird} 
on:keydown={changeFavoriteBird}>
<Bird
name={favoriteBird} 
emoji={favoriteBirdEmoji} />
</div>

{#each birds as bird}
    <Bird name={bird} emoji={birdEmoji}/>
{/each}