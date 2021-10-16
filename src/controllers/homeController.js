const express = require('express');
const cubeService = require('../services/cubeService');

const router = express.Router();

const home = (req, res) => {
    let cubes = cubeService.getAll();

    res.render('index', { cubes });
};

router.get('/', home);

module.exports = router;

// https://www.youtube.com/watch?v=ygNg-ts6Peo
// 2,00,26