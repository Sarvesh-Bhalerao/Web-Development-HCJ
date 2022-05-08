"use strict";

let panels = document.querySelectorAll(".panel");
// panels is an array

// panels.forEach((pan) => {
//   pan.addEventListner("click", () => {
//     console.log(777);
//   });
// });

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", function () {
    removeactive();
    panels[i].classList.add("active");
  });
}

function removeactive() {
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active");
  }
}
