<script>
    let message;

fetch("http://localhost:8080/", {
    method: "GET",
        credentials: "include",
        headers: {
            'Content-type': 'application/json'
        }
}).then(response => response.text()).then(result => {
    message = result;
})
</script>

<div class="main-page">
<h1>{message}</h1>
</div>