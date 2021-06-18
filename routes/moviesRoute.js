// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const moviesController = require("../controllers/moviesController");

/* GET detail movie. */

router.get("/detailMovies/:id", moviesController.detail); // colocar /:id

/* GET create movie form. */

router.get("/createMovies", moviesController.add);

/* POST create movie form. */

//router.post("/createMovies")

/* GET edit movie form. */

router.get("/editMovies", moviesController.update);

/* PUT edit movie form. */

///router.put("/editMovies")

/* DELETE one movie. */

router.get("/deleteMovies", moviesController.delete); //colocar /:id
//router.delete("/deleteMovies/:id");

module.exports = router;
