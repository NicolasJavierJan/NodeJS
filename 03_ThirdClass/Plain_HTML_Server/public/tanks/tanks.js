console.log("aa")

// Show tanks in the div "tanks-wrapper"
const tanksWrapper = document.getElementById("tanks-wrapper");

fetch("/api/tanks")
.then(response => response.json())
.then(result => {
    result.data.forEach(tank => {
        const tankDiv = document.createElement("div");
        const tankName = document.createElement("p");
        tankName.innerText = tank.name || "No name"; // in case there's no name in the resource
        tankDiv.appendChild(tankName);
        tanksWrapper.appendChild(tankDiv);
    })
});





//
// fetch("/api/tanks"), type ReadableStream (bytestream).
// take that response, parse it as JSON.
// then result and console.log(result)