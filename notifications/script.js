"use strict";

const button = document.querySelector(".btn");
const toasts = document.querySelector("#toasts");

const messages = [
  `Hello World!`,
  `Error !`,
  `404 Not Found!`,
  `2b || !2b`,
  `Message`,
];

button.addEventListener("click", createnotification);

function createnotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  toasts.appendChild(notif);
  notif.innerText = getrandommsg();

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getrandommsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}
