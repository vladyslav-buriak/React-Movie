const axios = require("axios");
const { API_KEY } = require("../../config");
const { Movie } = require("./entities/Movie");
const { Movies } = require("./entities/Movies");
const { Genre } = require("./entities/Genres");

const getPopulars = async (currentPage, lang, filterParam) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=Drama&language=${lang}&page=${currentPage}&sort_by=${filterParam.sortBy}.${filterParam.sortType}`
  );
  return new Movies(data);
};

const getDetails = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&`
  );
  return new Movie(data);
};

const getGenres = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return data.genres.map((g) => new Genre(g));
};
module.exports = {
  getPopulars,
  getDetails,
  getGenres,
};
