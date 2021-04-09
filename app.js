const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const log = require("morgan");
const indexRoute = require("./routes/index");
const patientRoute = require("./routes/patients");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(log("dev"));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.use('/', indexRoute);
app.use('/patients', patientRoute);

module.exports = app;