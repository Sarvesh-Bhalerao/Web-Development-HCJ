"use strict";

const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let curractive = 1;

next.addEventListener("click", function () {
  curractive++;
  if (curractive > circles.length) {
    curractive = cirles.length;
  }

  updateLine();
});

prev.addEventListener("click", function () {
  curractive--;
  if (curractive < 1) {
    curractive = 1;
  }

  updateLine();
});

function updateLine() {
  circles.forEach((circle, idx) => {
    if (idx < curractive) {
      circle.classList.add("activea");
    } else {
      circle.classList.remove("activea");
    }
  });

  let activeass = document.querySelectorAll(".activea");
  progress.style.width =
    ((activeass.length - 1) / (circles.length - 1)) * 100 + "%";

  if (curractive === 1) {
    prev.disabled = true;
  } else if (curractive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
