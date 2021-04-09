const db = require("../models");
const passport = require("passport");
const local = require("./local");
// const { Deserializer } = require("node:v8");

passport.serializeUser((patient, done) => {
    console.log("*** serializeUser called, patient: ");
    console.log(patient);
    console.log("-------------");
    done(null, { _id: patient._id });
});

passport.deserializeUser((id, done) => {
    console.log("Deserialized");
    db.Patient.findOne(
        { _id: id },
        "email",
        (err, patient) => {
            console.log("*** deserialize patient, patient: ");
            console.log(patient);
            console.log("-------------");
            done(null, patient);
        }
    );
});

passport.use(local);

module.exports = passport;