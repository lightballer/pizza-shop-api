const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  name: {
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
  price_small: {
    type: Number,
    required: true,
  },
  price_medium: {
    type: Number,
    required: true,
  },
  price_large: {
    type: Number,
    required: true,
  },
});

module.exports = model('Pizza', PizzaSchema);
