const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
		maxlength: 100,
	},
	imageUrl: {
		type: String,
		required: true,
		// 1-st way to validate:
		// validate: /^https?:\/\//i,

		// 2-nd way to validate:
		validate: {
			validator: function (value) {
				return /^https?:\/\//i.test(value)
			},
			message: 'Image Url is Invalid!'
		}
	},
	difficultyLevel: {
		type: Number,
		required: true,
		min: 1,
		max: 5,
	}
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
