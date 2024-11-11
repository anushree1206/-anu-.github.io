document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents the form from refreshing the page

    // Simple validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || phone === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Simulate sending data to the server
    formMessage.style.color = "#4CAF50";
    formMessage.textContent = "Thank you! Your message has been sent.";

    // Optionally, reset the form after submission
    document.getElementById("contactForm").reset();
});