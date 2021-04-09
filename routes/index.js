const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
// const testLocation = require("./testLocation")

router.use("/api", apiRoutes);
// router.use(testLocation);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;