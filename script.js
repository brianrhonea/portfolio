const API_URL = "https://portfolio-seven-virid-30.vercel.app/#contact"; 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
      form.reset();
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  });
});

  
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Close modal when clicking outside content
  window.onclick = function (event) {
    let modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  };
  