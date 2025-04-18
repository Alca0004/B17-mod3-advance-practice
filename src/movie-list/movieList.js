import { createMovieCard } from "./movieCard.js";

export const movieListLayout = {
  Grid: "grid",
  List: "list",
};
// Fn that builds the whole movie section
export function createMoviesContainerElement(movies, layout = movieListLayout.Grid) {
  const container = document.createElement("div");
  container.id = "movie-list-container";
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");
  /// For each movie it creates a card
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie, layout);
    row.appendChild(movieCard);
  });
  /// add the movies to a row contaiener, then returns the whole thing
  container.appendChild(row);
  return container;
}
