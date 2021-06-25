const db = require("../database/models");
const allUsers = db.User;
const allToken = db.PasswordReset;

module.exports = async function (req, res, next) {
  if (req.session.user) {
    res.locals.user = req.session.user;
    return next();
  } else if (req.cookies.remember_token) {
    const token = await allToken.findOne({
      where: { token: req.cookies.remember_token },
    });
    if (token) {
      const user = await allUsers.findOne({ where: { email: token.email } });
      if (user) {
        req.locals.user = user;
      }
    }
  }
  next();
};
