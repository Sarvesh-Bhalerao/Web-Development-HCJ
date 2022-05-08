"use strict";

let textel = document.querySelector("#text");
let speedin = document.querySelector("#speed");

const text = [
  `we love programming`,
  `Hello World !`,
  `2b || !2b`,
  `Every Problem has Solution`,
  `Just Do It!`,
  `Talk Less, Work More!`,
  `Be consistent!`,
];
let i = 1;
let j = 0;
let speed = 300 / speedin.value;

appeartext();

function appeartext() {
  textel.innerText = text[j].slice(0, i);
  i++;

  if (i > text[j].length) {
    i = 1;
    j = Math.floor(Math.random() * 7);
  }

  setTimeout(appeartext, speed);
}

speedin.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
