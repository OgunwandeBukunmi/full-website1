const navbar = document.querySelector(".navbar");
const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", (e) => {
  navbar.classList.toggle("show");
});
