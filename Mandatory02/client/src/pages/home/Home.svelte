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
    <h1>Mandatory II</h1>
    <h2>For Full Stack Development with NodeJS</h2>
    <h3>By Nicolas Javier Jan</h3>
    <p>{message}</p>
</div>