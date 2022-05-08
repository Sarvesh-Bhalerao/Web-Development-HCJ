"use strict";

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updatecount = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const incre = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + incre)}`;
      setTimeout(updatecount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updatecount();
});
