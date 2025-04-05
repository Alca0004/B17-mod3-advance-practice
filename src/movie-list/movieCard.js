import { apiConfig } from "../api/apiConfig.js";

/// Making sure the default layout is grid
export function createMovieCard(movie, layout = "grid") {
  // Main wrapper that will hold the card, and if the layout is list add the class 'movie-list' otherwise 'movie-grid'
  const card = document.createElement("div");
  card.classList.add(layout === "list" ? "movie-list" : "movie-grid");

  // Image with the api's movie poster
  const img = document.createElement("img");
  img.classList.add("movie-poster");
  img.src = `${apiConfig.posterBaseUrl}${movie.poster_path}`;
  img.alt = movie.title;

  // Movie title also if the title is longer than 25 character, shorten it and adds ...

  const title = document.createElement("h5");
  title.classList.add("movie-title");

  if (layout === "list") {
    title.textContent = movie.title;
  } else {
    const maxTitleLength = 25;
    title.textContent = movie.title.length > maxTitleLength ? movie.title.slice(0, maxTitleLength) + "..." : movie.title;
  }

  /// Averate rating and release date placing them side by side

  const meta = document.createElement("p");
  meta.classList.add("movie-meta");
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
  meta.textContent = `${movie.vote_average} | ${releaseYear}`;

  // Synopsis of the movie also if its longer than 120 characters, shorten it and add ...

  const description = document.createElement("p");
  description.classList.add("movie-overview");
  const overview = movie.overview || "No description available.";
  const maxLength = 120;
  description.textContent = layout === "list" ? overview : overview.length > maxLength ? overview.slice(0, maxLength) + "..." : overview;

  // Conditial where if the user selects list

  if (layout === "list") {
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("movie-list-text");

    textWrapper.appendChild(title);
    textWrapper.appendChild(meta);
    textWrapper.appendChild(description);

    card.appendChild(img);
    card.appendChild(textWrapper);
  } else {
    /// If user is in list mode everyhting just stacks vertically
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
  }

  return card;
}
