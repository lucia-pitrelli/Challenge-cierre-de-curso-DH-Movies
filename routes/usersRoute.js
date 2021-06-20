// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const userController = require("../controllers/usersController");

// Middelware Required

//COLOCAR

/* Register and processing form*/

router.get("/register", userController.register);

router.post("/register", userController.processRegister);

/*Log in and processing form*/

router.get("/login", userController.login);

//router.post("/login")

/* GET user profile. */

router.get("/usersProfile/:id", userController.profile);

module.exports = router;
