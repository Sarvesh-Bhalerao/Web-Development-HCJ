"use strict";
const increasebtn = document.querySelector("#increase");
const decreasebtn = document.querySelector("#decrease");
const sizeel = document.querySelector("#size");
const colorel = document.querySelector("#color");
const clear = document.querySelector("#clear");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed == true) {
    let x2 = e.offsetX;
    let y2 = e.offsetY;
    drawcircle(x2, y2);
    drawline(x2, y2, x, y);

    x = x2;
    y = y2;
  }
});

function drawcircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawline(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
function updatesizevalue() {
  sizeel.innerText = size;
}

colorel.addEventListener("change", (e) => {
  color = e.target.value;
});

increasebtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }

  updatesizevalue();
});

decreasebtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }

  updatesizevalue();
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
