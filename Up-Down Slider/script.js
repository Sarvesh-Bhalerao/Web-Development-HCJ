"use strict";

const container = document.querySelector(".container");
const slidert = document.querySelector(".right-slide");
const slidelt = document.querySelector(".left-slide");
const upbtn = document.querySelector(".up-btn");
const downbtn = document.querySelector(".down-btn");
const slidelength = slidert.querySelectorAll("div").length;

let activeslideidx = 0;

slidelt.style.top = `-${(slidelength - 1) * 100}vh`;

upbtn.addEventListener("click", () => changeslide("up"));
downbtn.addEventListener("click", () => changeslide("down"));

const changeslide = (direction) => {
  const sliderheight = container.clientHeight;
  if (direction === "up") {
    activeslideidx++;
    if (activeslideidx > slidelength - 1) {
      activeslideidx = 0;
    }
  } else if (direction === "down") {
    activeslideidx--;
    if (activeslideidx < 0) {
      activeslideidx = slidelength - 1;
    }
  }
  slidert.style.transform = `translateY(-${activeslideidx * sliderheight}px)`;
  slidelt.style.transform = `translateY(${activeslideidx * sliderheight}px)`;
};
