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
      url: "http://localhost:5000/subscribe",
      data: submission,
      success: function(newSubmission) {
        $successMessage.append(
          "<p>Succesvol verstuurd: " + newSubmission.firstname + "</p>"
        );
      },
      error: function() {
        console.log("Er is een fout opgetreden.");
      }
    });
  });
});

// $("#newsletter").submit(function(event) {
//   // prevent default action
//   event.preventDefault();
//   var post_url = $(this).attr("action");
//   var request_method = $(this).attr("method");

//   // Encode form elements for submission
//   var form_data = $(this).serialize();

//   $.ajax({
//     url: post_url,
//     crossDomain: true,
//     type: request_method,
//     data: form_data
//   }).done(function(response) {
//     //
//     $("#message").html(response);
//   });
// });
