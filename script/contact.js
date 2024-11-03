document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      if (!name) e.target.name.classList.add("error");
      if (!email) e.target.email.classList.add("error");
      if (!message) e.target.message.classList.add("error");

      setTimeout(() => {
        e.target.name.classList.remove("error");
        e.target.email.classList.remove("error");
        e.target.message.classList.remove("error");
      }, 500);

      return;
    }

    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.innerText = "Sending...";
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.innerText = "Send Message";
      submitButton.disabled = false;
      alert("Message sent successfully!");
    }, 2000);
  });
