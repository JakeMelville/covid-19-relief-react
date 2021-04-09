const db = require("../../models");
const router = express.Router();
const passport = require("passport");

router.get("/patient", (req, res) => {
  db.Patient.find({})
    .then((res) => res.json(res))
});

router.post("/pateint", (req, res) => {
  console.log("POST")

  const newPatient = {};

        newPatient.name = req.body.name;
        newPatient.cellPhone = req.body.cellPhone;
        newPatient.email = req.body.email;
        newPatient.password = req.body.password;

  db.Patient.findOne({ email: newPatient.email }, (err, patient) => {
    if(err) {
      console.log("Error")
    } else if (patient) {
      res.json({
        error: `Email: ${newPatient.email} already in use!`
      });
    } else if (patient) {
      res.json({
        error: `Email: ${req.body.email} already in use!`
      });
    }
  });

  router.get("/patient/:id", (req, res) => {
    console.log(`this is req.params.id ${req.params.id}`)
    db.Patient.find({ _id: req.params.id })
      .then(patient => res.json(patient))
      .catch(err => res.json(err))
  });

  router.put("/patient/:id", (req, res) => {
    db.Patient.findByIdAndUpdate(patient._id, {
      $set: {
        name: req.body.name,
        cellPhone: req.body.cellPhone,
        email: req.body.email,
        password: req.body.password
      }
    },
    { new: true})
    .then(updatePatient => res.json(updatedPatient))
  })
  .catch(err => res.json(err));
});

router.post("/login", (req, res, next) => {
  console.log(req.body)
  next()
},
  passport.authenticate("local"),
  (req, res) => {
    console.log("Login successful!, req.patient");
    const patientInfo = {
      id: req.patient._id,
      email: req.patient.email,
      cellPhone: req.patient.cellPhone
    };
    res.send(patientInfo);
  }
);

// router.get("/patient/:id/testlocation", (req, res) => {
//   db.Patient.find({ _id: req.params.id })
//     .populate("location")
//     .then(patient => res.json(patient))
//     .catch(err => res.json(err))
// });

router.post("/logout", (req, res) => {
  if (req.patient) {
    req.logout()
    res.send({ message: "Logged out!" })
  } else {
    res.send({ message: "Not signed in!"})
  }
})

module.exports = router;
