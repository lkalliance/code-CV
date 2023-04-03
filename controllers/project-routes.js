const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    const today = new Date;
    const year = { year: today.getFullYear() };
    // create the rendering assets
    res.render('createProject', { year });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); 


router.get('/login', (req, res) => {
  try {
    // Render the login page

    // for login page
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
