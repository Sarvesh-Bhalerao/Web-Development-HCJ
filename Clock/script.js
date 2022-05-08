"use strict";

const hourhand = document.querySelector(".hour");
const minhand = document.querySelector(".minute");
const sechand = document.querySelector(".second");
const datee = document.querySelector(".date");

const timee = document.querySelector(".timee");
const btn = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

btn.addEventListener("click", () => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    btn.innerHTML = `Dark Mode`;
  } else {
    html.classList.add("dark");
    btn.innerHTML = `Light Mode`;
  }
});

function settime() {
  const time = new Date();
  //   console.log(time);

  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursforclock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  hourhand.style.transform = `translate(-50%, -100%) rotate(${hours * 30}deg)`;

  minhand.style.transform = `translate(-50%, -100%) rotate(${
    minutes * 6 + hours * 360
  }deg)`;

  sechand.style.transform = `translate(-50%, -100%) rotate(${
    seconds * 6 + minutes * 360 + hours * 60 * 360
  }deg)`;

  timee.innerText = `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  datee.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(settime, 1000);
