const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
	status: {
		type: String,
		required: true,
	},
	total_price: {
		type: Number,
		required: true,
	},
	date: {
		type: Date.now,
		required: true,
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	order_list: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Pizza',
			required: true,
		},
	],
});

module.exports = model('Order', OrderSchema);
