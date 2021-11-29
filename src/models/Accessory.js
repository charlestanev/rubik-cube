const mongoose = require('mongoose');

const asseccorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: [true, 'Image Url is required !'],
		validate: [/^https?:\/\//i, 'Invalid Image Url'],
	},
	description: {
		type: String,
		required: true,
		maxlength: 50,
	}
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;