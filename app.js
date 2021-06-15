// ************ Require's ************
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");
const methodOverride = require("method-override");
require("dotenv").config();
//const models = require("./database/models/index"); FALTA HACER

//Testing the connection database  FALTA HACER
/*const connectServer = async () => {
  try {
    await models.sequelize.authenticate();
    console.log("conectado DB ok");
  } catch (error) {
    console.error("error DB", error);
  }
};
connectServer();*/

// ************ express() ************
const app = express();

// ************ Template Engine ************
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ************ Middlewares ************
app.use(logger("dev")); // uso

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(
  session({
    secret: "movies dh",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, console.log("Escuchando en el puerto 3000"));

// ************ Route System require and use() ************
const indexRoutes = require("./src/routes/indexRoute");
const usersRoutes = require("./src/routes/usersRoute");
const moviesRoutes = require("./src/routes/moviesRoute");

app.use("/", indexRoutes);
app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
