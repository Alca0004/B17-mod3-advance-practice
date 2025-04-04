import { createMovieCard } from "./movieCard.js";

// Step 1: Define layout options
export const movieListLayout = {
  Grid: "grid",
  List: "list",
};

// Step 2: This function will return a full container with all movie cards
export function createMoviesContainerElement(movies, layout = movieListLayout.Grid) {
  const container = document.createElement("div");
  container.id = "movie-list-container";
  container.classList.add("container");

  const row = document.createElement("div");
  row.classList.add("row");

  // Step 3: Loop through movie list and add each card
  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie, layout);
    row.appendChild(movieCard);
  });

  container.appendChild(row);
  return container;
}
