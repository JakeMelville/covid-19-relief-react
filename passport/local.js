const db = require("../models");
const local = require("passport-local").Strategy;

const storage = new local(
    {
        emailField: "email"
    },
    function (email, password, done) {
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