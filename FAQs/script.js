"use scrict";

const togbtns = document.querySelectorAll(".faq-toggle");

togbtns.forEach((togbtn) => {
  togbtn.addEventListener("click", () => {
    togbtn.parentNode.classList.toggle("active");
  });
});
