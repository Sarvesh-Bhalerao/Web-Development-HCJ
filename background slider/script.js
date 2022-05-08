"use strict";

const body = document.querySelector("body");
// const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#right");

let actslide = 0;

rightbtn.addEventListener("click", function () {
  actslide++;

  if (actslide > slides.length - 1) {
    actslide = 0;
  }
  setBgtoBody();
  setactslide();
});

leftbtn.addEventListener("click", function () {
  actslide--;

  if (actslide < 0) {
    actslide = slides.length - 1;
  }
  setBgtoBody();
  setactslide();
});

function setBgtoBody() {
  body.style.backgroundImage = slides[actslide].style.backgroundImage;
}
setBgtoBody(); //To set background for first
function setactslide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[actslide].classList.add("active");
}
