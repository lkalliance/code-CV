const router = require("express").Router();
const { User, Project } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Render the main page
    const today = new Date();
    const year = { year: today.getFullYear() };

    const projectData = await Project.findAll({
      attributes: ["title", "description", "url", "image"],
    });
    const projects = await projectData.map((project) =>
      project.get({ plain: true })
    );

    // create the rendering assets
    res.render("homepage", { year, projects });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    // Render the login page
    const today = new Date();
    const year = { year: today.getFullYear() };
    const userInfo = {
      userId: req.session.userId,
      username: req.session.username,
    };

    // Does user 1 exist?
    const userData = await User.findByPk(1, {
      attributes: ["id"],
    });

    const exists = {};

    if (!userData) {
      exists.exists = false;
    } else {
      const user = await userData.get({ plain: true });
      exists.exists = user.id == 1;
    }

    // for login page
    res.render("login", { year, userInfo, exists });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
