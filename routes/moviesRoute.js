// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const movieController = require("../controllers/moviesController");

// Middelware
const validations = require("../middlewares/ValidateCreateAndEdit");

/* GET detail movie. */

router.get("/detailMovies/:id", movieController.detail);

/* create movie form. */

router.get("/createMovies", movieController.add);

router.post("/createMovies", validations, movieController.create);

/* edit movie form. */

router.get("/editMovies/:id", movieController.update);

router.put("/editMovies/:id", validations, movieController.edit);

/* DELETE one movie. */

router.get("/deleteMovies/:id", movieController.delete);

router.delete("/deleteMovies/:id", movieController.destroy);

module.exports = router;
