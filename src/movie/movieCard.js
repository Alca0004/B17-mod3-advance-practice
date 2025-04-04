import { apiConfig } from "../api/apiConfig.js";

export function createMovieCard(movie) {
  const col = document.createElement("div");
  col.classList.add("movie-grid");

  const img = document.createElement("img");
  img.classList.add("movie-poster");
  img.src = `${apiConfig.posterBaseUrl}${movie.poster_path}`;
  img.alt = movie.title;

  const title = document.createElement("h5");
  title.classList.add("movie-title");
  const fullTitle = movie.title;
  const maxTitleLength = 25;
  title.textContent = fullTitle.length > maxTitleLength ? fullTitle.slice(0, maxTitleLength) + "..." : fullTitle;

  const info = document.createElement("p");
  info.classList.add("movie-meta");

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";

  info.textContent = `Rating: ${movie.vote_average} | ${releaseYear}`;

  const description = document.createElement("p");
  description.classList.add("movie-overview");
  const maxLength = 120;
  const overview = movie.overview || "No description available.";
  description.textContent = overview.length > maxLength ? overview.slice(0, maxLength) + "..." : overview;

  col.appendChild(img);
  col.appendChild(title);
  col.appendChild(info);
  col.appendChild(description);

  return col;
}
