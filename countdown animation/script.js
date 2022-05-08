"use strict";

const nums = document.querySelectorAll(".nums span");

const counter = document.querySelector(".counter");

const finalmsg = document.querySelector(".final");
const btn = document.querySelector("#replay");

runAnimation();
function reset() {
  counter.classList.remove("hide");
  finalmsg.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });
  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nexttolast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goin" && idx !== nexttolast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goout" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalmsg.classList.add("show");
      }
    });
  });
}

btn.addEventListener("click", function () {
  reset();
  runAnimation();
});
