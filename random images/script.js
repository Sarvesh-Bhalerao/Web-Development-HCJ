"use strict";

const container = document.querySelector(".container");
const url = `https://source.unsplash.com/random/`;

const total_photos = 30;

const buton = document.querySelector(".btn");
for (let i = 0; i < total_photos; i++) {
  const img = document.createElement("img");
  img.src = `${url}${getrandomsize()}`;
  container.appendChild(img);
}

buton.addEventListener("click", function () {
  container.innerHTML = ``;

  for (let i = 0; i < total_photos; i++) {
    const img = document.createElement("img");
    img.src = `${url}${getrandomsize()}`;
    container.appendChild(img);
  }
});

function getrandom() {
  return Math.floor(Math.random() * 10) + 300;
}

function getrandomsize() {
  return `${getrandom()}x${getrandom()}`;
}
