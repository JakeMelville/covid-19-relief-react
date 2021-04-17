const router = require("express").Router();
const patientController = require("../../controllers/patientController");

// Matches with "/api/patient"
router.route("/")
  .get(patientController.findAll)
  .post(patientController.create);

// Matches with "/api/patient/:id"
router
  .route("/:id")
  .get(patientController.findById)
  .put(patientController.update)
  .delete(patientController.remove);

// router.get("/logout", patientController.logout);
// router.get("/login", patientController.login);

module.exports = router;