const db = require("../models/Patient");
// var passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const storage = new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        console.log("Passport - auth - email: ", email);
        db.Patient.findOne({ email: email }, (err, patient) => {
            if(err) {
                return done(err);
            }
            if (!patient) {
                return done(null, false, { message: "Incorrect email! "});
            }
            if (!patient.checkPassword(password)) {
                return done(null, false, { message: "Incorrect password!" });
            }
            return done(null, patient);
        });
    }
);

module.exports = storage;