const bcrypt = require("bcryptjs");
const db = require("./../database/models");
const allUsers = db.User;
const sequelize = db.sequelize;

const usersController = {
  register: (req, res) => {
    return res.render("register");
  },
  processRegister: (req, res) => {
    const newUser = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    };

    allUsers
      .create(newUser)
      .then(() => {
        return res.render("index");
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },
  login: (req, res) => {
    return res.render("login");
  },

  profile: (req, res) => {
    return res.render("usersProfile");
  },
};

module.exports = usersController;
