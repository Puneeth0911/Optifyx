function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("success-msg").textContent =
      "✅ Thank you for your message, " + name + "!";
  } else {
    document.getElementById("success-msg").textContent =
      "❌ Please fill all fields correctly.";
  }

  // Optionally, clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}
