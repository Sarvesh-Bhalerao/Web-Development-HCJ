"use strict";

const joke = document.getElementById("joke");
const btn = document.querySelector("#btn");

generatejoke();
btn.addEventListener("click", generatejoke);

// function generatejoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     });
// }

async function generatejoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();
  joke.innerHTML = data.joke;
}
