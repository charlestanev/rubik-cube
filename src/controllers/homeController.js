const express = require("express");
const cubeService = require("../services/cubeService");

const router = express.Router();

const home = (req, res) => {
	let cubes = cubeService.getAll();

	res.render("index", { cubes });
};

const about = (req, res) => {
	res.render("about");
};

const search = (req, res) => {
	// console.log(req.query);

	let { search, from, to } = req.query;

	let cubes = cubeService.search(search, from, to);

	res.render('index', { cubes });
};

router.get("/", home);
router.get("/about", about);
router.get("/search", search);


module.exports = router;

// https://www.youtube.com/watch?v=ygNg-ts6Peo
router.get("/about", about);
// 2,00,26
// 2,47,40
