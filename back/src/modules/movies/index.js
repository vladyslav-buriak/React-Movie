const axios = require("axios");
const { API_KEY } = require("../../config");
const { Movie } = require("./entities/Movie");
const { Movies } = require("./entities/Movies");

const getPopulars = async (currentPage) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  );
  return new Movies(data);
};

const getDetails = async (id) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&`
  );
  return  new Movie(data)
};
module.exports = {
  getPopulars,
  getDetails

};
