const { getPopulars, getDetails, getGenres } = require("../modules/movies");

async function moviesDate(parent, args, context) {
  const data = await getPopulars(args.currentPage, args.lang ,args.filterParam);
  return data;
}

async function movieByGenres(parent, args, context) {
  const data = await getGenres();
  return data;
}

async function movieById(parent, args, context) {
  let ids = await args.id.map((id) => getDetails(id));

  let allRequest = await Promise.all(ids);
  return allRequest;
}

module.exports = {
  moviesDate,
  movieById,
  movieByGenres,
};
