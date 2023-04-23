<script>
    import toastr from "toastr";
    import 'toastr/build/toastr.min.css';
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

    toastr["success"]("You have been successfully logged in!");

    toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "500",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
    }


</script>

<div class="main-page">
<h1>{message}</h1>
</div>