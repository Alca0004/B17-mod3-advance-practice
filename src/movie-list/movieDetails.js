import { getMovieDetailData, getMovieCreditsData } from "../api/api.js";
import { getAppElem } from "../util/dom.js";
import { apiConfig } from "../api/apiConfig.js";

export async function renderMovieDetail(movieId) {
  try {
    const movie = await getMovieDetailData(movieId);
    const credits = await getMovieCreditsData(movieId);
    const app = getAppElem();
    app.innerHTML = "";

    const backButton = createBackButton();
    const backdropSection = createBackdropOverlay(movie);
    const castSection = createCastSection(credits);

    app.append(backButton, backdropSection, castSection);
  } catch (error) {
    console.error("Failed to render movie detail:", error);
  }
}

// Back button within toolbar
function createBackButton() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("movie-detail-toolbar", "container");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-icon");
  button.addEventListener("click", () => {
    window.dispatchEvent(new CustomEvent("movie:list:back"));
  });

  const img = document.createElement("img");
  img.src = "/left-arrow.svg";
  img.alt = "Back";

  button.appendChild(img);
  wrapper.appendChild(button);
  return wrapper;
}

// fn in charge of creating the backdrop overlay w/ title/rating/release date/Genre/Synopsis
function createBackdropOverlay(movie) {
  const section = document.createElement("div");
  section.classList.add("movie-backdrop-overlay");
  section.style.backgroundImage = `url(${apiConfig.backdropBaseUrl}${movie.backdrop_path})`;

  const content = document.createElement("div");
  content.classList.add("container", "backdrop-content");

  const layout = document.createElement("div");
  layout.classList.add("movie-detail-layout");

  const poster = document.createElement("img");
  poster.classList.add("movie-detail-poster");
  poster.src = `${apiConfig.posterBaseUrl}${movie.poster_path}`;
  poster.alt = `${movie.title} poster`;

  const info = document.createElement("div");
  info.classList.add("movie-info");

  const title = document.createElement("h2");
  title.textContent = movie.title;

  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
  const rating = `${movie.vote_average}`;
  const runtime = `${movie.runtime} min`;

  const details = document.createElement("p");
  details.textContent = `${year} • ${rating} • ${runtime}`;

  const genres = document.createElement("p");
  genres.textContent = movie.genres.map((g) => g.name).join(", ");

  const overview = document.createElement("p");
  overview.textContent = movie.overview;

  info.append(title, details, genres, overview);
  layout.append(poster, info);
  content.appendChild(layout);
  section.appendChild(content);

  return section;
}

// Fn which creates the cast section
function createCastSection(credits) {
  const section = document.createElement("section");
  section.classList.add("movie-cast");

  const title = document.createElement("h3");
  title.textContent = "Cast";
  section.appendChild(title);

  const castWrapper = document.createElement("div");
  castWrapper.classList.add("cast-list");

  credits.cast.slice(0, 6).forEach((actor) => {
    const card = document.createElement("div");
    card.classList.add("cast-card");

    const img = document.createElement("img");
    img.src = actor.profile_path ? `${apiConfig.photoBaseUrl}${actor.profile_path}` : "/placeholder.jpg";
    img.alt = actor.name;

    const name = document.createElement("p");
    name.textContent = actor.name;

    const character = document.createElement("p");
    character.textContent = `as ${actor.character}`;

    card.append(img, name, character);
    castWrapper.appendChild(card);
  });

  section.appendChild(castWrapper);
  return section;
}
