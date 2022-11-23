const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/courses', courseRoutes);
router.use('/friends', friendRoutes);

module.exports = router;
