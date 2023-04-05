const router = require('express').Router();

const projectRoutes = require('./project-routes');
const userRoutes = require('./user-routes');


router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

module.exports = router;
