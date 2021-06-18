const db = require("../database/models");
const allMovies = db.Movie;
const sequelize = db.sequelize;

const usersController = {
  detail: (req, res) => {
    allMovies
      .findByPk(req.params.id)
      .then((detail) => {
        return res.render("detailMovies", { detail });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },
  add: (req, res) => {
    return res.render("createMovies");
  },

  update: (req, res) => {
    return res.render("editMovies");
  },

  delete: (req, res) => {
    return res.render("deleteMovies");
  },
};

module.exports = usersController;
