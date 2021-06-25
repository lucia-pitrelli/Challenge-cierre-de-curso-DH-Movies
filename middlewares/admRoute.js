/*module.exports = (req, res, next) => {
  // Si el usuario está logeado, lo enviamos a la home
  if (req.session.user && req.body.rol == 1) {
    return res.redirect("/");
  }

  // De lo contrario que siga a donde iba
  next();
};*/
