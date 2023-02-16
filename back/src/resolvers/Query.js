const { getPopulars, getDetails } = require("../modules/movies");

async function moviesDate(parent, args, context) {
  const data = await getPopulars(args.currentPage, args.lang);
  console.log(args);
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
};
