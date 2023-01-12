function moviesDate(parent, args, context) {
  return {
    page: 2,
    totalResults: 1,
    totalPages: 13,
    results: [
      {
        title: "Titanic",
        popularity: 8,
        releaseDate: "2013",
        overview: "okey",
        posterPath: "images",
        genres: [{ id: 1, name: "Comedy" }],
      },
    ],
  };
}

module.exports = {
  moviesDate,
};
