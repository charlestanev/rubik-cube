const express = require('express');

const cubeController = require('./controllers/cubeController.js');
const homeController = require('./controllers/homeController.js');

const router = express.Router();

router.all('/', (req, res) => {
    res.render('index');
});

router.use('/', homeController);
router.use('/cube', cubeController);

module.exports = router;