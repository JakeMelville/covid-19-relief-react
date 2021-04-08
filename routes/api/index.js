const router = require("express").Router();
const userRoutes = require("./signin");

// Book routes
router.use("/user", userRoutes);

module.exports = router;