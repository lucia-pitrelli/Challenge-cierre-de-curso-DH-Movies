const usersController = {
  register: (req, res) => {
    return res.render("register");
  },
  login: (req, res) => {
    return res.render("login");
  },

  profile: (req, res) => {
    return res.render("usersProfile");
  },
};

module.exports = usersController;
