$("#newsletter").submit(function(event) {
  // prevent default action
  event.preventDefault();
  var post_url = $(this).attr("action");
  var request_method = $(this).attr("method");

  // Encode form elements for submission
  var form_data = $(this).serialize();

  $.ajax({
    url: post_url,
    crossDomain: true,
    type: request_method,
    data: form_data
  }).done(function(response) {
    //
    $("#message").html(response);
  });
});
