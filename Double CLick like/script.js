"use strict";
const photo = document.querySelector(".photo");
const times = document.querySelector("#times");

let clicktime = 0;

photo.addEventListener("dblclick", (e) => {
  createheart(e);
});

const createheart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftoffset = e.target.offsetLeft;
  const topoffset = e.target.offsetTop;

  const xinside = x - leftoffset;
  const yinside = y - topoffset;

  //   console.log(xinside, yinside);

  heart.style.top = `${yinside}px`;
  heart.style.left = `${xinside}px`;

  photo.appendChild(heart);
  times.innerHTML = ++clicktime;

  //After 5 sec heart will remove from DOM
  setTimeout(() => heart.remove(), 1000);
};
