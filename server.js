const express = require("express");
// const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const morgan = require("morgan");
const MongoStore = require("connect-mongo")(session);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Add routes, both API and view
app.use(passport.initialize());
app.use("./client/src/Auth/passport")(passport);
app.use("./api/user", user);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covid-relief", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
