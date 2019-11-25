import axios from "axios";
const key = "361cf82cbf562fb184f0e8222e304a01";
export const trend = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then(data => data.data.results);
};

export const getFilmById = (movie_id = 423204) => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}`)
    .then(data => data.data);
};

export const getCredits = (movie_id = 423204) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${key}`
    )
    .then(data => data.data);
};

export const getReviews = (movie_id = 423204) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${key}&language=en-US&page=1`
    )
    .then(data => data.data);
};

export const getByQuery = (query) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(data => data.data);
};

