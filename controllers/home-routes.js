const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Render the main page
    const today = new Date;
    const year = { year: today.getFullYear() };

    // create the rendering assets
    res.render('homepage', { year });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); 


router.get('/login', (req, res) => {
  try {
    // Render the login page
    const today = new Date;
    const year = { year: today.getFullYear() };
    const userInfo = {
      userId: req.session.userId,
      username: req.session.username
    }

    // for login page
    res.render('login', { year, userInfo });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
