const router = require("express").Router();

const homeRoutes = require("./home-routes");
const projectRoutes = require("./project-routes");
const apiRoutes = require("./api");

router.use("/", homeRoutes);
router.use("/projects", projectRoutes);
router.use("/api/", apiRoutes);

module.exports = router;
