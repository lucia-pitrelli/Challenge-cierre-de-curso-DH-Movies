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
        return res.redirect("index");
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  login: (req, res) => {
    return res.render("login");
  },

  // processLogin: (req, res) => {},

  profile: (req, res) => {
    // allUsers
    //  .findByPk(req.params.id)
    //  .then((user) => {
    //   return res.render("usersProfile", { user });
    // })
    // .catch((error) => {
    // return res.redirect(error);
    // });
    return res.render("usersProfile");
  },

  //  logout: (req, res) => {},
};

module.exports = usersController;
