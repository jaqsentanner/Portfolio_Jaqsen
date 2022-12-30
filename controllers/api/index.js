const router = require('express').Router();
const formRoutes = require('./formRoutes');

router.use('/forms', formRoutes);

module.exports = router;