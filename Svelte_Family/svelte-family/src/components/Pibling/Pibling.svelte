<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["cookie", "cookie", "cookie"];

    function handleShowLove(message) {
        console.log(message);
    }

    function handleAllowance(){
        niblings.forEach(nibling => nibling.allowance = nibling.allowance + 100)
        // Why does this make it change?
        niblings[0].name = niblings[0].name;
    }

    function handleEatCookie(){
        if (cookies.length === 0){
            console.log("No more cookies");
        } else {
            cookies.pop()
            cookies = cookies;
            console.log("Cookie has been eaten");
        }
    }
</script>

<h2>{name}</h2>

<p>Cookie Jar {cookies}</p>

{#each niblings as nibling (nibling.id)}
    <Nibling nibling={nibling} onShowLove={handleShowLove} piblingName={name} onAllowance={handleAllowance} onEatCookie={handleEatCookie}/>
{/each}