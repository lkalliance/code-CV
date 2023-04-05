const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    // no one but me
    if ( !(req.session.userId == 1)) {
      res.redirect('/');
      return;
    }
    const today = new Date;
    const year = { year: today.getFullYear() };
    // create the rendering assets
    res.render('createProject', { year });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); 


module.exports = router;
