const Cube = require("../models/Cube.js");

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
	let cube = new Cube(name, description, imageUrl, difficulty);

	Cube.add(cube);
};

const cubeService = {
	create,
	getAll,
	getOne,
};

module.exports = cubeService;
