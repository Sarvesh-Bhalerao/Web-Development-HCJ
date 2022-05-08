"use strict";
const contents = document.querySelectorAll(".content");
const listitems = document.querySelectorAll("nav ul li");

listitems.forEach((item, index) => {
  item.addEventListener("click", function () {
    hideallcontent();
    hideallitems();

    item.classList.add("active");
    contents[index].classList.add("show");
  });
});

function hideallcontent() {
  contents.forEach((content) => content.classList.remove("show"));
}
function hideallitems() {
  listitems.forEach((item) => item.classList.remove("active"));
}
