document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".container-hamburger");

  // -->Toggle menu in click my icon
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // -->Close menu
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.classList.remove("show");
    }
  });
});
