const PatientModel = require("../models");
// const { Patient } = require("../models/patient");
// const db = require("../models");
// const local = require("passport-local").Strategy;

// const storage = new local(
//     {
//         emailField: "email"
//     },
//     function (email, password, done) {
//         db.Patient.findOne({ email: email }, (err, patient) => {
//             if(err) {
//                 return done(err);
//             }
//             if (!patient) {
//                 return done(null, false, { message: "Incorrect email! "});
//             }
//             if (!patient.checkPassword(password)) {
//                 return done(null, false, { message: "Incorrect password!" });
//             }
//             return done(null, patient);
//         });
//     }
// );

// module.exports = storage;

module.exports = {
    loginPatient: (email, password, callback) => {
        PatientModel.findOne({ email: email }).exec((error, patient) => {
            if (error) {
                callback({ error: true })
            } else if (!patients) {
                callback({ error: true })
            } else {
                patient.comparePassword(password, (matchError, isMatch) => {
                    if (matchError) {
                        callback({ error: true })
                    } else if (!isMatch) {
                        callback({ error: true })
                    } else {
                        callback({ success: true })
                    }
                })
            }
        })
    }
}