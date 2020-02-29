var contactForm = $("form#contact-form");
contactForm.submit(function(event) {
  event.preventDefault();
  var service_id = "gmail";
  var template_id = "holidayhomesunited";

  contactForm
    .find(".alert-message")
    .html("<p>Je e-mail wordt verstuurd...</p>");
  emailjs.sendForm(service_id, template_id, contactForm[0]).then(
    function() {
      contactForm
        .find(".alert-message")
        .html("<p>Hartelijk dank! Je e-mail is succesvol verzonden!</p>");
    },
    function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      contactForm.find("button").text("Vraag versturen");
    }
  );
  return false;
});
