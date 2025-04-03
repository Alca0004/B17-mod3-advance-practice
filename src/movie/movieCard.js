import { apiConfig } from "../api/apiConfig.js";

export function createMovieCard(movie) {
  const col = document.createElement("div");
  col.classList.add("col-sm-6", "col-md-4", "col-lg-3");

  const card = document.createElement("div");
  card.classList.add("card", "h-100", "shadow-sm");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = `${apiConfig.posterBaseUrl}${movie.poster_path}`;
  img.alt = movie.title;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-between");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  const fullTitle = movie.title;
  const maxTitleLength = 25;
  title.textContent = fullTitle.length > maxTitleLength ? fullTitle.slice(0, maxTitleLength) + "..." : fullTitle;

  const description = document.createElement("p");
  description.classList.add("card-description");
  description.textContent = movie.overview || "No description available.";

  const rating = document.createElement("p");
  rating.classList.add("card-text");
  rating.textContent = `Rating: ${movie.vote_average}`;

  const maxLength = 120;
  const overview = movie.overview || "No description available.";
  description.textContent = overview.length > maxLength ? overview.slice(0, maxLength) + "..." : overview;

  const release = document.createElement("p");
  release.classList.add("card-text");
  release.textContent = `Release: ${movie.release_date}`;

  cardBody.appendChild(title);
  cardBody.appendChild(rating);
  cardBody.appendChild(release);
  cardBody.appendChild(description);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
}
