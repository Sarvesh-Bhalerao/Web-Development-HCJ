let font = document.querySelector(".loading-text");

let bg = document.querySelector(".bg");

arr = [
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

function changebg() {
  index = Math.floor(Math.random() * 5);
  bg.style.background = `url(${arr[index]})`;
}

changebg();
let load = 0;

let interval = setInterval(incrcount, 25); //time in ms

function incrcount() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }

  font.innerText = `${load}%`;
  font.style.opacity = scale(load, 0, 100, 1, 0);

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

incrcount();

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
