const { getPopulars } = require("../modules/movies");

async function moviesDate(parent, args, context) {
  const data = await getPopulars();

  return data;
}

module.exports = {
  moviesDate,
};
