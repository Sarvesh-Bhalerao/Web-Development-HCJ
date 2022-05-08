const search = document.querySelector(".search");

document.querySelector(".btn").addEventListener("click", function () {
  search.classList.toggle("active");
  document.querySelector(".input").focus();
});
