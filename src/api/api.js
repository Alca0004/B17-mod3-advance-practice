import axios from "axios";
import { apiConfig } from "./apiConfig.js";

export async function getMovieListData(type = apiConfig.movieListType.NowPlaying) {
  const url = getMovieListUrl(type, apiConfig);
  return (await axios(url))?.data;
}

function getMovieListUrl(type, config) {
  let movieListUrl = config.baseUrl;
  movieListUrl += `/movie/${type}`;
  movieListUrl += `?api_key=${config.apiKey}`;
  movieListUrl += `&language=${config.langIso}`;
  return movieListUrl;
}
export async function getMovieDetailData(movieId) {
  const url = `${apiConfig.baseUrl}/movie/${movieId}?api_key=${apiConfig.apiKey}&language=${apiConfig.langIso}`;
  return (await axios.get(url)).data;
}

export async function getMovieCreditsData(movieId) {
  const url = `${apiConfig.baseUrl}/movie/${movieId}/credits?api_key=${apiConfig.apiKey}&language=${apiConfig.langIso}`;
  return (await axios.get(url)).data;
}
