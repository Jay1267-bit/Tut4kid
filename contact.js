document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      emailjs.sendForm("service_77eth8j", "template_yvbhh2b", this)
        .then(function () {
          alert("Message sent!");
        }, function (error) {
          alert("Failed to send message: " + error.text);
        });
    });
  });
  