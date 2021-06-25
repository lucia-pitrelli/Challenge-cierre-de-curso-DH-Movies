const db = require("./../database/models");
const allMovies = db.Movie;
const allGenres = db.Genre;
const allActors = db.Actor;
const sequelize = db.sequelize;
//const moment = require("moment");
//const path = require("path");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

const moviesController = {
  detail: (req, res) => {
    allMovies
      .findByPk(req.params.id, {
        include: [{ association: "genre" }, { association: "actors" }],
      }) //utilizo los as de movie
      .then((detail) => {
        return res.render("detailMovies", { detail });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },
  //get create form
  add: (req, res) => {
    allGenres
      .findAll()
      .then((genre) => {
        return res.render("createMovies", { genre });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },
  //post create form
  create: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const newMovie = {
        ...req.body,
        genre_id: req.body.genre,
      };
      allMovies
        .create(newMovie)
        .then((newMovie) => {
          // console.log(newMovie);

          return res.redirect("/");
        })
        .catch((error) => {
          return res.redirect(error);
        });
    } else {
      res.render("createMovies", { errors: errors.mapped(), old: req.body });
    }
  },

  /// get edit form
  update: (req, res) => {
    const updateMovie = allMovies.findByPk(req.params.id, {
      include: ["genre"],
    });
    const updateGenre = allGenres.findAll();

    Promise.all([updateMovie, updateGenre])
      .then(([movie, genre]) => {
        return res.render("editMovies", { movie, genre });
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  //post edit form
  edit: function (req, res) {
    allMovies
      .update(
        { ...req.body, genre_id: req.body.genre },
        { where: { id: req.params.id } }
      )
      .then(() => {
        //console.log("sale",req.body)
        return res.redirect("/");
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  // delete form
  delete: function (req, res) {
    allMovies.findByPk(req.params.id).then((movies) => {
      return res.render("deleteMovies", { movies });
    });
  },

  destroy: function (req, res) {
    allMovies
      .destroy({ where: { id: req.params.id }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        return res.redirect("/");
      })
      .catch(() => {
        return res.send(error);
      });
  },
};

module.exports = moviesController;
