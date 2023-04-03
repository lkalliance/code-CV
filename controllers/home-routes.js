const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Render the main page
    console.log(`
    
    
    
    
    Rendering the home page
    
    
    
    
    
    `);
    const today = new Date;
    const year = { year: today.getFullYear() };
    console.log(`
    
    
    
    
    
    
    Year is ${year.year}
    
    
    
    
    
    
    `)

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

    // for login page
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
