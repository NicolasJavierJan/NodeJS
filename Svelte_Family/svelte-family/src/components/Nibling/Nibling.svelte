<script>
    export let nibling;
    export let onShowLove;
    export let piblingName;
    export let onAllowance;
    export let onEatCookie;

    import { refrigeratorMessages } from "../../store/refrigeratorMessage";

    let fridgeMessage = "";

    function handleFridgeMessage() {
        // Check from Ander's Repository
        //$refrigeratorMessages.push(fridgeMessage);
        //refrigeratorMessages.set([fridgeMessage]);
        /*
        refrigeratorMessages.update((currentFridgeMessages) => {
            console.log(currentFridgeMessages);

        })
        fridgeMessage = ""
        */
    }
    </script>

<h5>{$refrigeratorMessages}</h5>

<!-- Dynamic Styling! -->
<div class:is-Girl={nibling.isGirl} 
    class:is-Boy={!nibling.isGirl} 
    class={nibling.blackSheep || "not-a-black-sheep"}>
{#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
    <p>Allowance: {nibling.allowance}</p>
{:else if !nibling.isGirl} <!-- you can also do {:else}-->
    <p>Nephew: {nibling.name}</p>
    <p>Allowance: {nibling.allowance }</p>
{/if}
</div>
<button on:click={() => onShowLove(`Hey ${piblingName}, It's me ${nibling.name} and I love you.`)}>Show Love</button>
<button on:click={() => onAllowance()}>Ask For Allowance</button>
<button on:click={onEatCookie}>Eat a Cookie</button>

<p>There are {$refrigeratorMessages.length} messages on the fridge</p>

<style>
    .is-Girl {
        border: 2px solid blue;
    }
    .is-Boy {
        border: 2px solid pink;
    }
    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }

    .Medium-Black-Sheep {
        background-color: burlywood;
    }

    .Ultra-Black-Sheep {
        background-color: brown;
    }
</style>