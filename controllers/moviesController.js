const usersController = {
  detail: (req, res) => {
    return res.render("detailMovies");
  },
  add: (req, res) => {
    return res.render("createMovies");
  },

  update: (req, res) => {
    return res.render("editMovies");
  },

  delete: (req, res) => {
    return res.render("deleteMovies");
  },
};

module.exports = usersController;
