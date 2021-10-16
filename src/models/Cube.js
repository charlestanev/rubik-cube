const uniqid = require("uniqid");

class Cube {
	static #cubes = [
		{
			id: "ekrljgnsklejrnglk",
			name: "mirror rubik cube",
			description: "mirror rubik cube",
			imageUrl: "https://m.media-amazon.com/images/I/61xKF56d15L._SL1000_.jpg",
			difficulty: "4"
		}
	];

	constructor(name, description, imageUrl, difficulty) {
		this.id = uniqid();
		this.name = name;
		this.description = description;
		this.imageUrl = imageUrl;
		this.difficulty = difficulty;
	}

	static get cubes() {
		return Cube.#cubes.slice();
	}

	static add(cube) {
		Cube.#cubes.push(cube);
	}
}

module.exports = Cube;
