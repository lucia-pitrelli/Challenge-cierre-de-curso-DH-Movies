const { body } = require("express-validator");

module.exports = [
  body("title").notEmpty().withMessage("Tienes que escribir un nombre"),
  body("rating")
    .notEmpty()
    .withMessage("Tienes que colocar el rating de la pelicula")
    .bail()
    .isDecimal()
    .withMessage("Debe ser decimal"),
  body("awards")
    .notEmpty()
    .withMessage("Tienes que colocar los premios de la pelicula"),
  body("release_date")
    .notEmpty()
    .withMessage("Tienes que colocar la fecha de estreno"),
];
