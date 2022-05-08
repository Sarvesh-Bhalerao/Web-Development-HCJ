"use strict";

const bg = document.querySelector("#background");
const pass = document.querySelector("#Password");

let arr = [
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

function changebg() {
  let index = Math.floor(Math.random() * 5);
  bg.style.background = `url(${arr[index]})`;
}

pass.addEventListener("input", (e) => {
  changebg();
  const input = e.target.value;
  let length = input.length;

  let blurvalue = 20 - length * 2;
  bg.style.filter = `blur(${blurvalue}px)`;
});
