const router = require("express").Router();
const patientRoutes = require("./patient");
const passport = require("../../passport")
// url: /api
router.use("/patient", patientRoutes);

// url: /api
router.post("/login", /* passport.authenticate("local"), */ (req, res) => {
      console.log("Login successful!, req.patient");
      const patientInfo = {
        id: req.patient._id,
        email: req.patient.email,
        cellPhone: req.patient.cellPhone
      };
      res.send(patientInfo);
    }
  );
  
  // url: /api
  router.post("/logout", (req, res) => {
    if (req.patient) {
      req.logout()
      res.send({ message: "Logged out!" })
    } else {
      res.send({ message: "Not signed in!"})
    }
  })


module.exports = router;

