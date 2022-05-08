const toggles = document.querySelectorAll(".toggle");
const time = document.querySelector("#time");
const money = document.querySelector("#money");
const energy = document.querySelector("#energy");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => dotrick(e.target))
);

function dotrick(clickedone) {
  if (time.checked && money.checked && energy.checked) {
    if (time === clickedone) {
      money.checked = false;
    }

    if (energy === clickedone) {
      time.checked = false;
    }

    if (money === clickedone) {
      energy.checked = false;
    }
  }
}
