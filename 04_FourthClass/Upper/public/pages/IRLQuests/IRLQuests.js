function fetchQuest(activityQueryString=""){
    fetch("https://www.boredapi.com/api/activity" + activityQueryString)
.then(response => response.json())
.then(result => {
    document.getElementById("quest").innerText = result.activity;
});
}

//fetchQuest();



const questButton = document.getElementById("new-quest");
questButton.addEventListener("click", getNewQuest);

function getNewQuest() {
    const dropdown = document.getElementById("activities");
    fetchQuest(`?type=${dropdown.value}`);
}