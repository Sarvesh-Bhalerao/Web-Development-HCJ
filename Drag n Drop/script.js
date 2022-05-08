"use strict";

const fillel = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fillel.addEventListener("dragstart", dragstart);
fillel.addEventListener("dragend", dragend);

for (const empty of empties) {
  empty.addEventListener("dragover", dragover);
  empty.addEventListener("dragleave", dragleave);
  empty.addEventListener("dragenter", dragenter);
  empty.addEventListener("drop", drop);
}

function dragstart() {
  this.classList.add("hold");
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragend() {
  this.className = "fill";
}
function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragleave() {
  this.className = "empty";
}
function drop() {
  this.className = "empty";
  this.append(fillel);
}
