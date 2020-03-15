$(function() {
  var $firstname = $("#firstname");
  var $lastname = $("#lastname");
  var $email = $("#email");
  var $successMessage = $("#success-message");

  $("#submit-email").on("click", function() {
    var submission = {
      firstname: $firstname.val(),
      lastname: $lastname.val(),
      email: $email.val()
    };
    $.ajax({
      type: "POST",
      url: "https://ci-newsletter-rest-api.herokuapp.com/subscribe",
      data: submission,
      success: function(newSubmission) {
        $successMessage.append(
          "<p>Bedankt voor je inschrijving " + newSubmission.firstname + "</p>"
        );
      },
      error: function() {
        console.log("Er is een fout opgetreden.");
      }
    });
  });
});
