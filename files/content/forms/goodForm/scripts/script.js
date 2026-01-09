$(document).ready(function(){
    console.log("1");
    // $("#messageForm").submit(function(event){
    $(document).on("submit", "#messageForm", function(event){
        event.preventDefault();
        console.log("2");
        $(".success, .error").hide();
        $(".error-msg").hide(); // Hide all previous error messages

        let isValid = true;
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

        console.log(name);

        // Validate name
        if (name === "") {
            console.log("name");
            $("#nameError").show();
            isValid = false;
        }

        // Validate email
        if (email === "" || !emailPattern.test(email)) {
            $("#emailError").show();
            isValid = false;
        }

        // Validate message
        if (message === "") {
            $("#messageError").show();
            isValid = false;
        }

        // If all inputs are valid, send AJAX request
        if (isValid) {
            $.ajax({
                url: "send_email.php",
                type: "POST",
                data: $(this).serialize(),
                success: function(response) {
                    if(response.trim() === "success") {
                        $(".success").fadeIn();
                        $("#messageForm")[0].reset();
                    } else {
                        $(".error").fadeIn().text(response);
                    }
                }
            });
        }
    });
});