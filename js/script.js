const navElement = document.getElementById("navbar");
const mobileMenuIcon = document.getElementById("mobile-menu");

mobileMenuIcon.addEventListener("click", () =>
  navElement.classList.toggle("active")
);
