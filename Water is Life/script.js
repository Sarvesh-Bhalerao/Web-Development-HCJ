"use strict";

const smallcups = document.querySelectorAll(".cup-small");
const litres = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");

updatebigcup();

smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    highlightcup(idx);
  });
});

function highlightcup(idx) {
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  //   smallcups[idx].classList.toggle("full");
  //Need to fill all the cups before that.

  smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updatebigcup();
}

function updatebigcup() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;
  const totalcups = smallcups.length;

  if (fullcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullcups / totalcups) * 330}px`;
    percentage.innerText = `${(fullcups / totalcups) * 100}%`;
  }

  if (fullcups === totalcups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    litres.innerText = `${2 - (fullcups * 250) / 1000}L`;
  }
}
