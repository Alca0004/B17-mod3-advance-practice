import { apiConfig } from "../api/apiConfig.js";

// Fn in charge of creating movie card
export function createMovieCard(movie, layout = "grid") {
  const card = document.createElement("div");
  card.classList.add(layout === "list" ? "movie-list" : "movie-grid");

  const poster = createPoster(movie);
  const title = createTitle(movie, layout);
  const ratingAndYear = createRatingAndYear(movie);
  const description = createDescription(movie, layout);

  if (layout === "list") {
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("movie-list-text");
    textWrapper.append(title, ratingAndYear, description);
    card.append(poster, textWrapper);
  } else {
    card.append(poster, title, ratingAndYear, description);
  }

  return card;
}

// Fn in charge of creating the movie poster
function createPoster(movie) {
  const img = document.createElement("img");
  img.classList.add("movie-poster");
  img.src = `${apiConfig.posterBaseUrl}${movie.poster_path}`;
  img.alt = movie.title;

  // CLICK HANDLER TO SHOW DETAILS
  img.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("movie:select", { detail: movie.id }));
  });

  return img;
}

// Fn in charge of creating the movie title
function createTitle(movie, layout) {
  const title = document.createElement("h5");
  title.classList.add("movie-title");

  const maxLength = 25;
  title.textContent = layout === "list" ? movie.title : movie.title.length > maxLength ? movie.title.slice(0, maxLength) + "..." : movie.title;

  // CLICK HANDLER TO SHOW DETAILS
  title.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("movie:select", { detail: movie.id }));
  });

  return title;
}

// Fn in charge of creating the Rating and Year and appending them side by side
function createRatingAndYear(movie) {
  const ratingAndYear = document.createElement("p");
  ratingAndYear.classList.add("movie-ratingAndYear");

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
  ratingAndYear.textContent = `${movie.vote_average} | ${releaseYear}`;

  return ratingAndYear;
}

// Fn in charge of creating the cards description
function createDescription(movie, layout) {
  const description = document.createElement("p");
  description.classList.add("movie-overview");

  const overview = movie.overview || "No description available.";
  const maxLength = 120;
  description.textContent = layout === "list" ? overview : overview.length > maxLength ? overview.slice(0, maxLength) + "..." : overview;

  return description;
}
