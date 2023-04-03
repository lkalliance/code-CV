const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Render the main page

    // create the rendering assets
    res.render('homepage', { userInfo, currentYear, showPolls });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); 


router.get('/login', (req, res) => {
  try {
    // Render the login page

    // create the rendering assets
    const userInfo = {
      username: req.session.username,
      userId: req.session.userId,
      loggedIn: req.session.loggedIn
    }
    const css = { url: '/css/login.css' }
    const today = new Date();
    const currentYear = { year: today.getFullYear() }

    res.render('login', { css, userInfo, currentYear });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/*', (req, res) => {
  try {
    // send the user to the home page

    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;
