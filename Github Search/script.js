"use strict";

const APIURL = "https://api.github.com/users/";
const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");

// function getuser(username) {
//   //   axios
//   //     .get(APIURL + username)
//   //     .then((res) => console.log(res))
//   //     .catch((err) => console.log(err));

//   axios
//     .get(APIURL + username)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }

async function getuser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createcard(data);
    getrepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createerrorcard("No User Found :( ");
    }
  }
}

async function getrepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created");
    addrepos(data);
  } catch (err) {
    if (err.response.status == 404) {
      createerrorcard("Problem in fetching in Repos :(");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getuser(user);
    search.value = "";
  }
});

function createcard(user) {
  const cardhtml = `<div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>
      ${user.bio}
    </p>

    <ul>
      <li>${user.followers} <strong> Followers</strong></li>
      <li>${user.following} <strong> Following</strong></li>
      <li>${user.public_repos} <strong> Repositories</strong></li>
    </ul>

    <div id="repos">
    </div>
  </div>
</div>`;

  main.innerHTML = cardhtml;
}

function createerrorcard(msg) {
  const carderr = `
    <div class="card">
    <h1>${msg}</h1>
    </div>`;

  main.innerHTML = carderr;
}

function addrepos(userrepo) {
  const repossel = document.getElementById("repos");

  userrepo.slice(0, 10).forEach((repo) => {
    const repoele = document.createElement("a");
    repoele.classList.add("repo");
    repoele.href = repo.html_url;
    repoele.target = "_blank";
    repoele.innerText = repo.name;

    repossel.appendChild(repoele);
  });
}
