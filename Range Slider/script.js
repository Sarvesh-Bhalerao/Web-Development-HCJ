"use strict";
const range = document.getElementById("range");
const label = document.querySelector("#label");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  //   console.log(value);

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");
  //   console.log(label_width);
  // num_width guves a number
  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label = +label_width.substring(0, label_width.length - 2);
  //   console.log(num_label, num_width);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (num_width / max) - num_label / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
