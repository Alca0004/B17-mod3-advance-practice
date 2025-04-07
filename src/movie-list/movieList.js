import { createMovieCard } from "./movieCard.js";

export const movieListLayout = {
  Grid: "grid",
  List: "list",
};

export function createMoviesContainerElement(movies, layout = movieListLayout.Grid) {
  const container = document.createElement("div");
  container.id = "movie-list-container";
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");

  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie, layout);
    row.appendChild(movieCard);
  });

  container.appendChild(row);
  return container;
}
