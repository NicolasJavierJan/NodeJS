<script>
    let name;
    let email;
    let subject;
    let text;
    let message = "";

    function handleContact(){
        fetch("http://localhost:8080/contact", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                text: text
            })
        })
        .then(response => {
            if (response.status === 200){
                message = "Email sent successfully";
            } else if (response.status === 500){
                message = "Error sending Email";
            }
        });
        
    }
</script>

<div class="contact-us-form">
    <h1 style="font-size: 36px">Contact Us</h1>
    <form on:submit|preventDefault={handleContact} >
        <div class="field">
        <label for="name">Name</label>
        <br>
        <input type="text" id="name" placeholder="name" name="name" bind:value={name} required>
        </div>
        <div class="field">
        <div class="field">
            <label for="email">E-mail</label>
            <br>
            <input type="email" id="email" placeholder="E-Mail" name="email" bind:value={email} required>
        </div>
        <br>
        <div class="field">
            <label for="subject">Subject</label>
            <br>
            <input type="subject" id="subject" placeholder="Subject" name="subject" bind:value={subject} required>
        </div>
        <br>
        <div class="field">
            <label for="message" >Message</label>
            <br>
            <textarea id="message" name="message" rows="6" cols="60" bind:value={text} required></textarea>
        </div>
        <div class="field">
        <button type="submit" id="sign-up-button">Send Email</button>
        </div>
    </form>
    <br>
    {message}
</div>