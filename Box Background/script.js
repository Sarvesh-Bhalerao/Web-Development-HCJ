"use strict";

const btn = document.getElementById("btn");
const boxescontain = document.querySelector(".boxes");
const change = document.querySelector(".btnn");
const box = document.querySelectorAll(".box");

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxescontain.appendChild(box);

      //   change.addEventListener("click", () => {
      //     box.style.background = `url("https://media3.giphy.com/media/fdVrmoFfsmw6G8nViL/200w.webp?cid=ecf05e4773496b3ddff71yo541m9if1hgipavu5zmnxkptkf&rid=200w.webp&ct=g")`;
      //   });
    }
  }
}

btn.addEventListener("click", () => {
  boxescontain.classList.toggle("big");
});

createBoxes();
