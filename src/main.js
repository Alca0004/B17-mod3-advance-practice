import "./scss/style.scss";
import { getMovieListData } from "./api/api.js";
import { apiConfig } from "./api/apiConfig.js";
import { createMoviesContainerElement } from "./movie-list/movieList.js";
import { layoutToggle, getCurrentLayout } from "./events/layoutToggle.js";
import { createMovieListToolbar } from "./movie-list/toolbar.js";

const app = document.getElementById("app");

const toolbar = createMovieListToolbar();
app.before(toolbar);

const typeSelect = document.getElementById("movie-type-select");

typeSelect.addEventListener("change", (event) => {
  currentMovieType = event.target.value;
  renderMovieList();
});

let currentMovieType = "now_playing";

async function renderMovieList() {
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

layoutToggle(renderMovieList);

renderMovieList();
