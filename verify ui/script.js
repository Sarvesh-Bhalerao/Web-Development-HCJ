"use strict";
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, i) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      code.value = "";
      setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
  });
});
