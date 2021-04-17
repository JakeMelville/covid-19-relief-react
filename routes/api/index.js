const router = require("express").Router();
const patientRoutes = require("./patient");
const passport = require("../../passport");

// Matches: /api/patient
router.use("/patient", patientRoutes);

// Matches: /api/login
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("Login successful!, req.user: ", req.user);
  
  const patientInfo = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    cellPhone: req.user.cellPhone,
  };
  res.send(patientInfo);
});

router.get("/login", (req, res) => {
  console.log("GET /login, req.user: ", req.user);
  if (!req.user) {
    res.redirect("/login");
  }

  return res.json(req.user);
});
// url: /api
router.post("/logout", (req, res) => {
  if (req.patient) {
    req.logout();
    res.send({ message: "Logged out!" });
  } else {
    res.send({ message: "Not signed in!" });
  }
});


// in case the code on top does not work

// router.get("/logout", (req, res) => {
//   console.log("Logged Out!")
//   req.logout();
//   res.json({
//     status: "logout",
//     msg: "Please log in again"
//   });
// });

module.exports = router;
