"use strict";

const cross = document.getElementById("toggle");
const nav = document.querySelector("nav");

cross.addEventListener("click", () => {
  nav.classList.toggle("active");
});
