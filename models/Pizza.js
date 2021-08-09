const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image_url: {
		type: String,
		required: true,
	},
	priceSmall: {
		type: Number,
		required: true,
	},
	priceMedium: {
		type: Number,
		required: true,
	},
	priceLarge: {
		type: Number,
		required: true,
	},
});

module.exports = model('Pizza', PizzaSchema);
