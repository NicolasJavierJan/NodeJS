// wrte a fetch that gets the visitor count and shows it in #visitor-count

fetch("/api/visitors").then(response => response.json()).then(visitors => {
    showVisitorCount(visitors)
})

function showVisitorCount(visitors){
    const visitorCount = document.getElementById("visitor-count");
    visitorCount.innerText = visitors.data;
}

function updateVisitorCount(){
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        showVisitorCount(result);
    })
}