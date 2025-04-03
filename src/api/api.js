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
