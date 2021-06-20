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
  //get create form
  add: (req, res) => {
    allMovies
      .findAll()
      .then((movie) => {
        return res.render("createMovies", { movie });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  create: (req, res) => {
    //const errors = validationResult(req);
    //if (errors.isEmpty()) {
    const newMovie = {
      ...req.body,
      genre_id: req.body.genre_id,
    };
    allMovies
      .create(newMovie)
      .then((newMovie) => {
        return res.redirect("index");
      })
      .catch((error) => {
        return res.redirect(error);
      });
    //} else {
    // res.render("createMovies", { errors: errors.array() });
  },
  //},

  // get edit form
  update: (req, res) => {
    allMovies
      .findByPk(req.params.id)
      .then((updateMovie) => {
        return res.render("editMovies", { updateMovie });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  edit: function (req, res) {
    allmovies
      .update(req.body, { where: { id: req.params.id } })
      .then(() => {
        return res.redirect("index");
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  delete: function (req, res) {
    allMovies.findByPk(req.params.id).then((movies) => {
      return res.render("deleteMovies", { movies });
    });
  },

  destroy: function (req, res) {
    allMovies
      .destroy({ where: { id: req.params.id }, force: true })
      .then((movies) => {
        return res.redirect("index");
      })
      .catch(() => {
        return res.send(error);
      });
  },
};

module.exports = usersController;
