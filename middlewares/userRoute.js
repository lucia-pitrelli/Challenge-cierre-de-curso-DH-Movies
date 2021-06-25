const db = require("../database/models");
const allUsers = db.User;

//busco el usuario en la base de datos por su rol.
//si el rol de simpleUser es igual a 0 y se encuentra logueado, redirigirlo a index

module.exports = async function (req, res, next) {
  const simpleUser = await allUsers.findOne({ where: { rol: req.params.rol } });
  if (simpleUser === 0 && req.session.user) {
    res.locals.user = req.session.user;
    return res.redirect("/");
  }

  next();
};
