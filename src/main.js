import "./scss/style.scss";
import { fetchMovies } from "./api/api";

// Get reference to the app container where we'll display the movies
const app = document.getElementById("app");

// Function to render movie cards
function renderMovies(movies) {
  app.innerHTML = ""; // Clear existing content

  // Loop through the movies and create a card for each
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    // Create the content for the movie card
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.vote_average}</p>
      <p>Release Date: ${movie.release_date}</p>
    `;

    // Append the card to the app container
    app.appendChild(movieCard);
  });
}

fetchMovies("now_playing")
  .then((movies) => {
    renderMovies(movies); // 👉 This actually renders them on screen
  })
  .catch((error) => console.error("Error fetching movies:", error));
