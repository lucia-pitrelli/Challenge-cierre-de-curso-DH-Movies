const db = require("./../database/models");
const allMovies = db.Movie;
const sequelize = db.sequelize;

const main = {
  home: (req, res) => {
    allMovies
      .findAll()
      .then((allMovie) => {
        return res.render("index", { allMovie });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },
};
module.exports = main;
