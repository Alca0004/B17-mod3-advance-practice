import "./scss/style.scss";
import { getMovieListData } from "./api/api.js";
import { apiConfig } from "./api/apiConfig.js";
import { renderMovieList } from "./movie/movieList.js";

const app = document.getElementById("app");

async function addMovieListGrid() {
  try {
    const { results: movies } = await getMovieListData(apiConfig.movieListType.NowPlaying);

    const rowElement = renderMovieList(movies);

    app.innerHTML = "";
    app.appendChild(rowElement);
  } catch (error) {
    console.error("Error loading movie list:", error);
  }
}

addMovieListGrid();
