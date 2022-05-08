"use strict";

const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileimg = document.getElementById("profile_img");
const auname = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = `<img
  src="https://images.pexels.com/photos/10305718/pexels-photo-10305718.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  alt=""
/>`;

  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quibusdam.`;
  profileimg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />`;
  auname.innerHTML = `Lorem ipsum`;
  date.innerHTML = `NOV 28,2021`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2500);
