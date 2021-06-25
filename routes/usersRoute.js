// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const userController = require("../controllers/usersController");

// Middelware Required

const noUser = require("../middlewares/noUserRoute");
const user = require("../middlewares/userRoute");
const admin = require("../middlewares/admRoute");

/* Register and processing form*/

router.get("/register", userController.register);

router.post("/register", userController.processRegister);

/*Log in and processing form*/

router.get("/login", userController.login);

router.post("/login", userController.processLogin);

/*Logout*/

router.get("/logout", userController.logout);

module.exports = router;
