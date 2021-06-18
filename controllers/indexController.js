const db = require("../database/models");
const allMovies = db.Movie;
const sequelize = db.sequelize;

const main = {
  home: (req, res) => {
    allMovies
      .findAll()
      .then((movie) => {
        return res.render("index", { movie });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },
};
module.exports = main;
