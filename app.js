// ************ Require's ************
const createError = require("http-errors");
const express = require("express");
const path = require("path");
//const cookieParser = require("cookie-parser");
//const session = require("express-session");
//const logger = require("morgan");  desinstalar dependencia
const methodOverride = require("method-override");
require("dotenv").config();
const models = require("./database/models/index");

//Testing the connection database
const connectServer = async () => {
  try {
    await models.sequelize.authenticate();
    console.log("conectado DB ok");
  } catch (error) {
    console.error("error DB", error);
  }
};
connectServer();

// ************ express() ************
const app = express();

// ************ Template Engine ************

app.set("view engine", "ejs");

// ************ Middlewares ************

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//app.use(cookieParser());

/*app.use(
  session({
    secret: "movies dh",
    resave: false,
    saveUninitialized: false,
    // maxAge: 24 * 60 * 60 * 1000 -> 24hs
  })
);*/

app.use(methodOverride("_method"));

const staticFolder = path.resolve(__dirname, "./public");

app.use(express.static(staticFolder));

app.listen(3000, console.log("Escuchando en el puerto 3000"));

// ************ Route System require and use() ************
const indexRoutes = require("./routes/indexRoute");
const usersRoutes = require("./routes/usersRoute");
const moviesRoutes = require("./routes/moviesRoute");

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
