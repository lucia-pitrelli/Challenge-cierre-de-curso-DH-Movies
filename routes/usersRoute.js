// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const userController = require("../controllers/usersController");

// Middelware Required

/* Register and processing form*/

router.get("/register", userController.register);

//router.post("/register");

/*Log in and processing form*/

router.get("/login", userController.login);

//router.post("/login")

/* GET user profile. */

router.get("/usersProfile", userController.profile); //colocar /:id

module.exports = router;
