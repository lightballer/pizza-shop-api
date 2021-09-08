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
    type: Date,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pizza',
      required: true,
    },
  ],
});

module.exports = model('Orders', OrderSchema);
