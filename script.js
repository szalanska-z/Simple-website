const menuIcon = document.querySelector(".menu-icon");
const menuSection = document.querySelector(".menu");
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

menuIcon.addEventListener("click", function () {
  menuSection.classList.toggle("active");
});

searchIcon.addEventListener("click", function () {
  searchInput.classList.toggle("active");
});
