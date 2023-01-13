const { IMG__PATH } = require("../../../config");

{
  IMG__PATH;
}

class Movie {
  constructor(movie) {
    this.id= movie.id;
    this.title = movie.title;
    this.popularity = movie.popularity;
    this.releaseDate = movie.release_date;
    this.overview = movie.overview;
    this.posterPath = `${IMG__PATH}${movie.poster_path}`;
  }
}

module.exports = {
  Movie,
};
