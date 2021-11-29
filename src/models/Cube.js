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
		// validate: [/^https?:\/\//i, 'Invalid Image Url']

		// 2-nd way to validate:
		validate: {
			validator: function (value) {
				return /^https?:\/\//i.test(value)
			},
			message: (props) => `Image Url ${props.value} is Invalid!`
		}
	},
	difficulty: {
		type: Number,
		required: true,
		min: 1,
		max: 5,
	}
});

// // 3-th way to validate:
// cubeSchema.path('imageUrl').validate(function (value) {
// 	return /^https?:\/\//i.test(value)
// });

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
