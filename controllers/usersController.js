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
    console.log("pepe", req.body);
    allUsers
      .findOne({ where: { email: req.body.email } })
      .then((user) => {
        console.log("usuario", user);
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            let userData = user.dataValues;
            delete userData.password;
            //le doy valor al usuario en session de userData,mientras sea el mismo usuario se tiene los datos del usuario
            req.session.user = userData;
            console.log(req.session);
            if (req.body.token) {
              const token = crypto.randomBytes(64).toString("base64");

              user
                .update(
                  { remember_token: token },
                  { where: { id: req.params.id } }
                )
                .then(() => {
                  // 24hs guardado
                  res.cookie("rememberToken", token, {
                    maxAge: 24 * 60 * 60 * 1000,
                  });
                  return res.redirect("/");
                })
                .catch((error) => {
                  return res.redirect(error);
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
        } else {
          return res.render("login", {
            errors: {
              email: {
                msg: "No se encuentra registrado el usuario",
              },
            },
          });
        }
      })
      .catch((error) => {
        return res.redirect(error);
      });
  },

  logout: (req, res) => {
    //elimino la session y luego la cookie
    req.session.destroy();

    res.cookie("rememberToken", null, { maxAge: -1 });

    res.redirect("/");
  },
};

module.exports = usersController;
