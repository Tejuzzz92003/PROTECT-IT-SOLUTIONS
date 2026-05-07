document.getElementById("whatsappBtn").addEventListener("click", function(){

  // Get values
  let name = document.getElementById("fullName").value;
  let phone = document.getElementById("phone").value;
  let device = document.getElementById("device").value;
  let issue = document.getElementById("issue").value;

  // Validation
  if(name === "" || phone === "" || device === "" || issue === ""){
    alert("Please fill all details");
    return;
  }

  // WhatsApp number
  let whatsappNumber = "919028803309";

  // Message (IMPORTANT FIX ✅)
  let message = `Hello, I want to book a repair.

Name: ${name}
Phone: ${phone}
Device: ${device}
Issue: ${issue}`;

  // Encode
  let encodedMessage = encodeURIComponent(message);

  // URL
  let url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(url, "_blank");

});
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});