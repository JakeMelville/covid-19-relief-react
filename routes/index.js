const router = require("express").Router();
const path = require("path");
const apiRoutes = require("../../../../Downloads/covid-19-relief-react 2/routes/api");
// const testLocation = require("./testLocation")

router.use("/api", apiRoutes);
// router.use(testLocation);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;