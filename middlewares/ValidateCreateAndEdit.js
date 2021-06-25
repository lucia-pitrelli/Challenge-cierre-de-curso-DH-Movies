const { body } = require("express-validator");

module.exports = [
  body("rating")
    .notEmpty()
    .withMessage("Tienes que colocar el rating de la pelicula"),
  body("title").notEmpty().withMessage("Tienes que completar el titulo"),
  body("awards").notEmpty().withMessage("Debes colocar la cantidad de premios"),
  body("genre").notEmpty().withMessage("Debes elegir un genero"),
  body("release_date")
    .notEmpty()
    .withMessage("Debes colocar la fecha de estreno"),
];
