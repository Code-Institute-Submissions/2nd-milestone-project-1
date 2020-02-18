var contactForm = $("form#contact-form");
contactForm.submit(function(event) {
  event.preventDefault();
  var service_id = "gmail";
  var template_id = "holidayhomesunited";

  contactForm.find("button").text("Sending...");
  emailjs.sendForm(service_id, template_id, contactForm[0]).then(
    function() {
      alert("Sent!");
      contactForm.find("button").text("Send");
    },
    function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      contactForm.find("button").text("Send");
    }
  );
  return false;
});
