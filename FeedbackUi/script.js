"use strict";
// event bubbling

const ratings = document.querySelectorAll(".rating");
const send = document.querySelector("#send");
const panel = document.querySelector("#panel");
const ratingcontainer = document.querySelector(".ratings-container");

let selectedrating = "Satisfied";

// panel.addEventListener("click", (e) => {
//   //   console.log("click", e.target);
//   //   if (e.target.classList.contains("rating")) {
//   //     console.log(e.target);
//   //   }

//   if (e.target.parentNode.classList.contains("rating")) {
//     removeactive();
//     e.target.parentNode.classList.add("active");
//     selectedrating = e.target.nextElementSibling.innerHTML;

//     // console.log(selectedrating);
//   }
// });

// To remove error we used ratings container as button is also part of panel
ratingcontainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeactive();
    e.target.parentNode.classList.add("active");
    selectedrating = e.target.nextElementSibling.innerHTML;
  }
});
send.addEventListener("click", (e) => {
  panel.innerHTML = `<i class = "fas fa-heart"></i>
  <strong>Thank You!</strong>
  <br/>
  <strong>Feedback : ${selectedrating}</strong>
  <p>We will use your feedback to improve our services</p>`;
});

function removeactive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
