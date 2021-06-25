module.exports = (req, res, next) => {
  // si no hay un  usuario en session, redirigir a view login
  if (!req.session.user) {
    return res.redirect("login");
  }

  next();
};
