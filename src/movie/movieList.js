import { createMovieCard } from "./movieCard.js";

export function renderMovieList(movies) {
  const row = document.createElement("div");
  row.classList.add("row", "g-4");

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    row.appendChild(card);
  });

  return row;
}
