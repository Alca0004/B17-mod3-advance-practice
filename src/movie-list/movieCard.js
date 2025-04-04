import { apiConfig } from "../api/apiConfig.js";

export function createMovieCard(movie, layout = "grid") {
  const card = document.createElement("div");
  card.classList.add(layout === "list" ? "movie-list" : "movie-grid");

  // --- Poster
  const img = document.createElement("img");
  img.classList.add("movie-poster");
  img.src = `${apiConfig.posterBaseUrl}${movie.poster_path}`;
  img.alt = movie.title;

  // --- Title
  const title = document.createElement("h5");
  title.classList.add("movie-title");
  const fullTitle = movie.title;
  const maxTitleLength = 25;
  title.textContent = fullTitle.length > maxTitleLength ? fullTitle.slice(0, maxTitleLength) + "..." : fullTitle;

  // --- Rating and Release Year (e.g., "6.9 | 2024")
  const meta = document.createElement("p");
  meta.classList.add("movie-meta");
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
  meta.textContent = `${movie.vote_average} | ${releaseYear}`;

  // --- Description
  const description = document.createElement("p");
  description.classList.add("movie-overview");
  const overview = movie.overview || "No description available.";
  const maxLength = 120;
  description.textContent = layout === "list" ? overview : overview.length > maxLength ? overview.slice(0, maxLength) + "..." : overview;

  // --- LIST layout: stack text next to image
  if (layout === "list") {
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("movie-list-text");

    textWrapper.appendChild(title);
    textWrapper.appendChild(meta);
    textWrapper.appendChild(description);

    card.appendChild(img);
    card.appendChild(textWrapper);
  } else {
    // --- GRID layout: vertical stack
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
  }

  return card;
}
