import "./scss/style.scss";

import { apiConfig } from "./api/apiConfig.js";
import { getMovieListData } from "./api/api.js";
import { createMovieListToolbar } from "./movie-list/toolbar.js";
import { createMoviesContainerElement } from "./movie-list/movieList.js";
import { layoutToggle, getCurrentLayout } from "./events/layoutToggle.js";
import { renderMovieDetail } from "./movie-list/movieDetails.js";

const app = document.getElementById("app");

const toolbar = createMovieListToolbar();
app.before(toolbar);

const typeSelect = document.getElementById("movie-type-select");

typeSelect.addEventListener("change", (event) => {
  currentMovieType = event.target.value;
  start();
});

let currentMovieType = "now_playing";
// when movie is clicked it shows detail page
window.addEventListener("movie:select", (event) => {
  const movieId = event.detail;
  renderMovieDetail(movieId);
});
//When triggered it shows the movie list again

window.addEventListener("movie:list:back", () => {
  start();
});
async function start() {
  const layout = getCurrentLayout();

  try {
    const { results: movies } = await getMovieListData(currentMovieType);
    const movieList = createMoviesContainerElement(movies, layout);

    app.innerHTML = "";
    app.appendChild(movieList);
  } catch (error) {
    console.error("Failed to load movies:", error);
  }
}

layoutToggle(start);

start();
