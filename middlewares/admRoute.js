module.exports = (req, res, next) => {
  if (req.session.user) {
    if (req.session.user.rol === 0) {
      return res.redirect("/users/login");
    }
  } else {
    return res.redirect("/users/login");
  }
  next();
};
