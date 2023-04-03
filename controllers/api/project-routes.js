const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async (req, res) => {
  try {

    // create the rendering assets
    res.json({ message: 'got it' });
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
