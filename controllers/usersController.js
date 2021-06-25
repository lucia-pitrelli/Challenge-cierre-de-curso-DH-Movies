const bcrypt = require("bcryptjs");
const db = require("./../database/models");
const allUsers = db.User;
const sequelize = db.sequelize;
const crypto = require("crypto");

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
        return res.redirect("login");
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  login: (req, res) => {
    return res.render("login");
  },

  processLogin: (req, res) => {
    allUsers
      .findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          if (bcryptjs.compareSync(req.body.password, user.password)) {
            userData = user.dataValues;
            delete userData.password;
            req.session.user = userData;
            if (req.body.token) {
              const token = crypto.randomBytes(64).toString("base64");

              allUsers.update({ remember_token: token });

              res.cookies("rememberToken", token, {
                maxAge: 1000 * 60 * 60 * 24 * 90,
              });
            }
            return res.redirect("/");
          } else {
            return res.render("login", {
              errors: {
                email: {
                  msg: "Los datos son inválidos",
                },
              },
            });
          }
        } else {
          return res.render("login", {
            errors: {
              email: {
                msg: "Los datos son inválidos",
              },
            },
          });
        }
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  /* profile: (req, res) => {
    allUsers
      .findByPk(req.params.id)
      .then((user) => {
        return res.render("usersProfile", { user });
      })
      .catch((error) => {
        return res.redirect(error);
      });
    return res.render("usersProfile");
  },
},*/

  logout: (req, res) => {
    req.session.destroy();

    res.cookie("rememberToken", null, { maxAge: -1 }); //destruyo la cookie

    res.redirect("/");
  },
};

module.exports = usersController;
