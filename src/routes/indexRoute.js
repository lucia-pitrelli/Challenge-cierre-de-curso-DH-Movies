// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const main = require("../controllers/indexController");

/* GET home page. */
router.get("/", main.home);

module.exports = router;
