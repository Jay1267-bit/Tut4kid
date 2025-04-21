document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
  
    if (!form) {
      console.error("Form not found");
      return;
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Collect the values from the input fields
      const name = form.querySelector("input[placeholder='Name']").value;
      const phone = form.querySelector("input[placeholder='Phone']").value;
      const email = form.querySelector("input[placeholder='Email']").value;
      const subject = form.querySelector("input[placeholder='Subject']").value;
      const message = form.querySelector("textarea[placeholder='Your Message']").value;
  
      // Send using EmailJS
      emailjs.send("service_77eth8j", "template_yvbhh2b", {
        from_name: name,
        phone: phone,
        reply_to: email,
        subject: subject,
        message: message
      })
      .then(function () {
        alert("Message sent successfully!");
        form.reset(); // clears the form
      }, function (error) {
        alert("Failed to send message. Error: " + error.text);
        console.error("EmailJS error:", error);
      });
    });
  });
  