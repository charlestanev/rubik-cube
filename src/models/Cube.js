const uniqid = require("uniqid");

class Cube {
	static #cubes = [
		{
			id: "ekrljgnsklejrnglk",
			name: "mirror rubik cube",
			description: "mirror rubik cube",
			imageUrl: "https://m.media-amazon.com/images/I/61xKF56d15L._SL1000_.jpg",
			difficulty: "4"
		}, {
			name: 'Ice Cube ',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi fuga ea, minima ab commodi a eligendi culpa iure.Exercitationem, iure veritatis magnam deleniti odit reiciendis blanditiis, nihil delectus tenetur quam omnis dicta ea repellat nam.Saepe molestias explicabo doloribus et numquam temporibus! Vero perspiciatis iusto id consequuntur facilis quos possimus consectetur odit velit suscipit reprehenderit quasi maiores culpa, porro cupiditate eaque rem necessitatibus tenetur quisquam eveniet maxime.Magni deleniti sapiente cupiditate excepturi, alias ipsa tenetur molestiae reprehenderit cum obcaecati molestias fugit voluptatibus id voluptatem voluptas commodi libero maiores omnis corrupti harum optio a est reiciendis enim? Nostrum sit architecto consequuntur.',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg/220px-Ice-Cube_2014-01-09-Chicago-photoby-Adam-Bielawski.jpg',
			difficulty: '5'
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
