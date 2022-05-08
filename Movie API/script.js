"use strict";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="`;

const form = document.querySelector("#form");
const search = document.querySelector(".search");
const main = document.querySelector("main");

getmovies(API_URL);

async function getmovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showmovies(data.results);
}

function showmovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const element = document.createElement("div");
    element.classList.add("movie");

    element.innerHTML = `<img
    src="${IMG_PATH + poster_path}"
    alt="${title}"
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class=${getrateclass(vote_average)}>${vote_average}</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    <p>
      ${overview}
    </p>
  </div>`;

    main.appendChild(element);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchterm = search.value;

  if (searchterm && searchterm !== "") {
    getmovies(SEARCH_API + searchterm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

function getrateclass(x) {
  if (x >= 8) {
    return "green";
  } else if (x >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
