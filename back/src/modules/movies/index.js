const axios = require("axios");
const { API_KEY } = require("../../config");
const { Movies } = require("./entities/Movies");

const getPopulars = async (currentPage) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  );
  return new Movies(data);
};

module.exports = {
  getPopulars,
};
