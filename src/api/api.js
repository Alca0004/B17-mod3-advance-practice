// src/api/api.js
import axios from "axios";
import { API_KEY, API_URL } from "./apiConfig";

export async function fetchMovies(category = "now_playing") {
  try {
    const response = await axios.get(`${API_URL}/movie/${category}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
