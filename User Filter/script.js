"use strict";
const resultss = document.getElementById("result");
const filter = document.getElementById("filter");

const listitems = [];

async function getdata() {
  const res = await fetch("https://randomuser.me/api/?results=50");

  const { results } = await res.json();
  //   console.log(results);

  //clear results
  resultss.innerHTML = ``;
  results.forEach((user) => {
    // console.log(user);
    const li = document.createElement("li");
    listitems.push(li);
    li.innerHTML = `
    <img src = "${user.picture.large}" alt ="${user.name.first}">
    <div class="user-info">
    <h4>${user.name.first}${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    resultss.appendChild(li);
  });
}

getdata();

filter.addEventListener("input", (e) => {
  filterdata(e.target.value);
});

const filterdata = (search) => {
  //   console.log(search);
  listitems.forEach((it) => {
    if (it.innerText.toLowerCase().includes(search.toLowerCase())) {
      it.classList.remove("hide");
    } else {
      it.classList.add("hide");
    }
  });
};
