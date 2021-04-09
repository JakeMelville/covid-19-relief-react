const router = require("express").Router();
const db = require("../models/index");
const path = require("path");
const patientRoute = require("./patients")
// const testLocation = require("./testLocation")

router.use(patientRoute);
// router.use(testLocation);

// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../client/public/home.js"))
// });

module.exports = router;