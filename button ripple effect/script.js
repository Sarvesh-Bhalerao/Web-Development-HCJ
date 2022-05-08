"use strict";

// const buttons = document.querySelectorAll(".ripple");
const button = document.querySelector(".ripple");
// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     const x = e.clientX;
//     const y = e.clientY;
//     // console.log(x, y);

//     const btntop = e.target.offsetTop;
//     // const btnbtn = button.getBoundingClientRect().top;
//     const btnleft = e.target.offsetLeft;
//     // console.log(btntop, btnbtn);

//     const xins = x - btnleft;
//     const yins = y - btntop;
//     // console.log(xins, yins);

//     const circle = document.createElement("span");
//     circle.classList.add("circle");
//     circle.style.top = yins + "px";
//     circle.style.left = xins + "px";

//     this.appendChild(circle);

//     setTimeout(() => circle.remove(), 500);
//   });
// });
button.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  // console.log(x, y);

  const btntop = e.target.offsetTop;
  // const btnbtn = button.getBoundingClientRect().top;
  const btnleft = e.target.offsetLeft;
  // console.log(btntop, btnbtn);

  const xins = x - btnleft;
  const yins = y - btntop;
  // console.log(xins, yins);

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yins + "px";
  circle.style.left = xins + "px";

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 400);
});
