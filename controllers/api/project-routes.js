const router = require("express").Router();
const { Project } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const projectData = await Project.create({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      image: req.body.image,
      user_id: req.session.userId,
    });
    const project = await projectData.get({ plain: true });
    res.json({ object: project, message: "got it" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    // Render the login page

    // for login page
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
